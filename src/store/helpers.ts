import { IProject, IProjectJson, IExperience } from '@/store/cvInterfaces'
import { config } from '@/config'

const JSONBIN_ROOT = config.services.jsonbin.root
const JSONBIN_X_ACCESS_KEY = process.env.VUE_APP_JSONBIN_X_ACCESS_KEY || ''
const JSONBIN_PROJECTS_ID = process.env.VUE_APP_JSONBIN_PROJECTS_ID || ''
const JSONBIN_CERTIFIICATES_ID = process.env.VUE_APP_JSONBIN_CERTIFIICATES_ID || ''
const JSONBIN_EXPERIENCE_ID = process.env.VUE_APP_JSONBIN_EXPERIENCE_ID || ''

const getBinJsonById = (id: string): Promise<Array<IProjectJson> | Array<IExperience >> => {
  const projectsDataUrl = `${JSONBIN_ROOT}/b/${id}?meta=false`

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

const normalizeData = (id: string) => getBinJsonById(id).then(data => projectsFromJson(data as IProjectJson[]))

export const getProjects = () => normalizeData(JSONBIN_PROJECTS_ID)
export const getCertificates = () => normalizeData(JSONBIN_CERTIFIICATES_ID)
export const getExperience = () => getBinJsonById(JSONBIN_EXPERIENCE_ID)