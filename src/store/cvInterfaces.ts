
export interface IEnRu {
  [lang: string]: string
}

export interface IExperience {
  company: IEnRu
  position: IEnRu
  from: IEnRu
  to: IEnRu
  responsibilities: IEnRu[]
}

interface IProjectBase {
  key: string
  country: string
  img: string
  short: string
  url?: string
  title: IEnRu
  description: IEnRu
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

interface IContact {
  title: string
  icon: string
  url: string
}

interface IDownload {
  title: IEnRu
  url: IEnRu
}

export interface IContacts {
  city: IEnRu
  address: IEnRu
  home: IContact
  email: IContact
  phone: IContact
  telegram: IContact
  linkedIn: IContact
  github: IContact
}

export interface IiAm {
  name: IEnRu
  bd: IEnRu
  position: IEnRu
  download: {
    word: IDownload
    google: IDownload
    pdf: IDownload
  }
  contacts: IContacts
  summary: IEnRu
  skills: string[][]
  languages: IEnRu[]
  certificates: IProject[]
  experience: IExperience[]
}


// http://oxy-oxygen.com/
// Oxygen
// Shelfs builder
