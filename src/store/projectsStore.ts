import * as R from "ramda";
import { projects, IProject } from "./projects";
import { defineStore } from "pinia";

const getPrRage = (pr: IProject) =>
  R.range(pr.from.getFullYear(), (pr.to || pr.from).getFullYear() + 1).map(
    (y) => y.toString()
  );
const defaultTs = (pr: IProject) => R.defaultTo([])(R.prop("techStack", pr));
const inTheYear = (year: string) => R.pipe(getPrRage, R.includes(year));
const filterProjectByTech = (tech: string) =>
  R.pipe(
    defaultTs,
    R.includes(tech)
    // R.tap(v => console.log(v))
  );

const projectsTechList = R.pipe(
  R.map(defaultTs),
  R.unnest,
  R.sortBy(R.identity),
  R.uniqBy(R.identity)
  // R.tap(v => console.log(v))
);

const getPrKey = R.prop("key");

type TTech = { text: string; value: number };
interface IGoup {
  years: string[];
  projects: string[];
  techs: string[];
}

const emptyGr: IGoup = {
  years: [],
  projects: [],
  techs: [],
};

const emptyHover = {
  year: "",
  project: "",
  tech: "",
};

const projectDic = projects.reduce(
  (acc, pr) => ({
    ...acc,
    [pr.key]: pr,
  }),
  {} as { [key: string]: IProject }
);

const initialState = {
  hover: emptyHover,
  selected: emptyGr,
  currentGroup: emptyGr,
  projectDic,
  projectKeys: [] as string[],
  techKeys: [] as TTech[],
  years: [] as string[],
};

interface ISetHoverParams {
  area: string;
  value: string;
}

const selectedFnsByAreaType = ({ area, value }: ISetHoverParams) => {
  if (area === "year") {
    const prList = R.filter(inTheYear(value), projects);
    return {
      projects: prList.map((pr) => getPrKey(pr)),
      techs: projectsTechList(prList),
    };
  } else if (area === "projects") {
    const pr = projectDic[value];
    return {
      years: getPrRage(pr),
      techs: R.sortBy(R.identity, pr.techStack),
    };
  } else if (area === "techs") {
    const prList = R.filter(filterProjectByTech(value), projects);
    return {
      years: R.pipe(
        R.map(getPrRage),
        R.unnest,
        R.uniq,
        R.sortBy(R.identity)
      )(prList),
      projects: prList.map((pr) => getPrKey(pr)),
    };
  }
};

export const useProjectsStore = defineStore("projects", {
  state: () => ({ ...initialState }),
  getters: {
    projectRange: () => (pr: IProject) => {
      return getPrRage(pr);
    },
  },
  actions: {
    clear() {
      this.years = [];
      this.projectKeys = [];
    },
    init() {
      this.years = R.pipe(
        R.map(getPrRage),
        R.unnest,
        R.uniq,
        R.sort((a: string, b: string) => a.localeCompare(b))
      )(projects);

      this.projectKeys = projects.map((pr) => getPrKey(pr));

      this.techKeys = R.pipe(
        R.map(defaultTs),
        R.unnest,
        R.countBy(R.identity),
        R.toPairs,
        R.map((p) => ({ text: p[0], value: p[1] }))
      )(projects) as TTech[];
    },
    changeDialogMode() {
      if (!this.currentGroup.projects.length) {
        this.currentGroup = { ...this.selected };
      } else {
        this.currentGroup = emptyGr;
      }
    },
    setHover({ area, value }: ISetHoverParams) {
      const hover = emptyHover;
      const selected = emptyGr;
      const areaProp = area as keyof typeof emptyHover;
      const areaPropM = `${area}s` as keyof typeof emptyGr;
      if (value) {
        hover[areaProp] = value;
        selected[areaPropM] = [value];
      }
      this.hover = hover;
      this.selected = {
        ...selected,
        ...selectedFnsByAreaType({ area, value }),
      };
    },
  },
});
