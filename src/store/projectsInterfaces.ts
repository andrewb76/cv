export interface Ii18nString {
  [lang: string]: string
}

interface IProjectBase {
  key: string
  country: string
  img: string
  short: string
  url?: string
  title: Ii18nString
  description: Ii18nString
  team?: string
  techStack: string[]
}

export interface IProject extends IProjectBase {
  from: Date
  to: Date | null
}

export interface IProjectJson extends IProjectBase {
  from: [number, number]
  to: [number, number]
}

export interface IProjectDic {
  [key: string]: IProject
}
// http://oxy-oxygen.com/
// Oxygen
// Shelfs builder
