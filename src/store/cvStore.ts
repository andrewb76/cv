import { defineStore } from 'pinia'
import { IProject } from '@/store/projectsInterfaces'
import { iAm } from './aboutMe' // TODO: move to jsonbin
import { getCertificates } from './helpers'

export const useCVStore = defineStore('cv', {
  state: () => ({
    isLoading: true,
    iAm: {
      ...iAm,
      certificates: [] as IProject[]
    }
  }),
  actions: {
    init (): Promise<void> {
      this.isLoading = true
      return getCertificates()
        .then((certificates: IProject[]) => {
          this.iAm.certificates = certificates instanceof Array<IProject> ? certificates : []
        })
        .finally(() => {
          this.isLoading = false
          return Promise.resolve()
        })
    }
  }
})
