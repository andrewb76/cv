import { IExperience } from './cvInterfaces'
import { defineStore } from 'pinia'
import { IProject } from '@/store/cvInterfaces'
import { iAm } from './aboutMe' // TODO: move to jsonbin
import { getCertificates, getExperience } from './helpers'

export const useCVStore = defineStore('cv', {
  state: () => ({
    isLoading: true,
    iAm
  }),
  actions: {
    init (): Promise<void> {
      this.isLoading = true
      return Promise.all([
        getExperience(),
        getCertificates()
      ]).then(([experience, certificates]) => {
        this.iAm.experience = (experience instanceof Array<IExperience> ? experience : []) as Array<IExperience>
        this.iAm.certificates = certificates instanceof Array<IProject> ? certificates : []
      })
        .finally(() => {
          this.isLoading = false
          return Promise.resolve()
        })
    }
  }
})
