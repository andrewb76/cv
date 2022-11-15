import * as R from 'ramda'
import { defineStore } from 'pinia'
import { IProject, IProjectJson, IProjectDic } from '@/store/projectsInterfaces'

const JSON_BIN_ROOT = 'https://api.jsonbin.io/v3'
const EDUCATION_PROJECT_KEY = 'ed_tnu'
const JSONBIN_PROJECTS_ID = process.env.VUE_APP_JSONBIN_PROJECTS_ID || ''
const JSONBIN_X_ACCESS_KEY = process.env.VUE_APP_JSONBIN_X_ACCESS_KEY || ''

const getPrRage = (pr: IProject) =>
  R.range(pr.from.getFullYear(), (pr.to || pr.from).getFullYear() + 1).map(
    (y) => y.toString()
  )
const defaultTs = (pr: IProject) => R.defaultTo([])(R.prop('techStack', pr))
const inTheYear = (year: string) => R.pipe(getPrRage, R.includes(year))
const filterProjectByTech = (tech: string) =>
  R.pipe(
    defaultTs,
    R.includes(tech)
    // R.tap(v => console.log(v))
  )

const projectsTechList = R.pipe(
  R.map(defaultTs),
  R.unnest,
  R.sortBy(R.identity),
  R.uniqBy(R.identity)
  // R.tap(v => console.log(v))
)

const getPrKey = R.prop('key')

type TTech = { text: string; value: number }
interface IGoup {
  years: string[]
  projects: string[]
  techs: string[]
}

const emptyGr: IGoup = {
  years: [],
  projects: [],
  techs: []
}

const emptyHover = {
  year: '',
  project: '',
  tech: ''
}

const initialState = {
  isLoading: true,
  hover: emptyHover,
  selected: emptyGr,
  currentGroup: emptyGr,
  projects: [] as IProject[],
  projectDic: {} as IProjectDic,
  projectKeys: [] as string[],
  techKeys: [] as TTech[],
  years: [] as string[]
}

interface ISetHoverParams {
  area: string
  value: string
}

const getBinJsonById = (id: string) => {
  const projectsDataUrl = `${JSON_BIN_ROOT}/b/${id}?meta=false`

  return fetch(projectsDataUrl, {
    headers: {
      'X-Access-Key': JSONBIN_X_ACCESS_KEY
    }
  })
  .then((response) => response.json())
}

const projectsFromJson = (arr: IProjectJson[]): IProject[] => arr.map(
  (project: IProjectJson): IProject => ({
    ...project,
    from: new Date(project.from[0], project.from[1]),
    to: new Date(project.to[0], project.to[1])
  })
)

export const useProjectsStore = defineStore('projects', {
  state: () => ({ ...initialState }),
  getters: {
    projectRange: () => (pr: IProject) => {
      return getPrRage(pr)
    },
    education: (state) => {
      return state.projects.find(
        (pr: IProject) => pr.key === EDUCATION_PROJECT_KEY
      )
    },
    selectedFnsByAreaType:
      (state) =>
        ({ area, value }: ISetHoverParams) => {
          if (area === 'year') {
            const prList = R.filter(inTheYear(value), state.projects)
            return {
              projects: prList.map((pr: IProject) => getPrKey(pr)),
              techs: projectsTechList(prList),
              years: [] as string[]
            }
          }
          if (area === 'projects') {
            const pr = state.projectDic[value]
            return {
              projects: [] as IProject[],
              techs: R.sortBy(R.identity, pr.techStack),
              years: getPrRage(pr)
            }
          }
          if (area === 'techs') {
            const prList = R.filter(filterProjectByTech(value), state.projects)
            return {
              years: R.pipe(
                R.map(getPrRage),
                R.unnest,
                R.uniq,
                R.sortBy(R.identity)
              )(prList),
              techs: [] as TTech[],
              projects: prList.map((pr: IProject) => getPrKey(pr))
            }
          }
        }
  },
  actions: {
    clear () {
      this.years = []
      this.projectKeys = []
    },
    init (): Promise<void> {
      return getBinJsonById(JSONBIN_PROJECTS_ID)
        .then((projects) => {
          if (!Array.isArray(projects)) {
            this.projects = []
          } else {
            this.projects = projectsFromJson(projects)
          }
          this.projectDic = this.projects.reduce(
            (acc: IProjectDic, pr: IProject) => ({
              ...acc,
              [pr.key]: pr
            }),
            {} as IProjectDic
          )
          this.years = R.pipe(
            R.map(getPrRage),
            R.unnest,
            R.uniq,
            R.sort((a: string, b: string) => a.localeCompare(b))
          )(this.projects)
          this.projectKeys = this.projects.map((pr: IProject) => getPrKey(pr))
          this.techKeys = R.pipe(
            R.map(defaultTs),
            R.unnest,
            R.countBy(R.identity),
            R.toPairs,
            R.map((p) => ({ text: p[0], value: p[1] }))
          )(this.projects) as TTech[]
        })
        .finally(() => {
          this.isLoading = false
          return Promise.resolve()
        })
    },
    changeDialogMode () {
      if (!this.currentGroup.projects.length) {
        this.currentGroup = { ...this.selected }
      } else {
        this.currentGroup = emptyGr
      }
    },
    setHover ({ area, value }: ISetHoverParams) {
      const hover = emptyHover
      const selected = emptyGr
      const areaProp = area as keyof typeof emptyHover
      const areaPropM = `${area}s` as keyof typeof emptyGr
      if (value) {
        hover[areaProp] = value
        selected[areaPropM] = [value]
      }
      this.hover = hover
      this.selected = {
        // ...selectedFnsByAreaType({ area, value }),
        ...selected
      }
    }
  }
})
