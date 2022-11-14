import { defineStore } from 'pinia'
import { IProject, IProjectJson } from '@/store/projectsInterfaces'
import { iAm } from './aboutMe' // TODO: move to jsonbin

const JSONBIN_ROOT = 'https://api.jsonbin.io/v3' // TODO: move to config
// const JSONBIN_IAM_ID = "635974910e6a79321e356e56"; // TODO: move to env
const JSONBIN_CERTIFIICATES_ID = process.env.VUE_APP_JSONBIN_CERTIFIICATES_ID // TODO: move to env
const JSONBIN_X_ACCESS_KEY = process.env.VUE_APP_JSONBIN_X_ACCESS_KEY || ''
export const useCVStore = defineStore('cv', {
  state: () => ({
    isLoading: true,
    isLoading: true,
    iAm: {
      ...iAm,
      certificates: [] as IProject[]
    }
  }),
  actions: {
    init (): Promise<void> {
      this.isLoading = true
      return fetch(`${JSONBIN_ROOT}/b/${JSONBIN_CERTIFIICATES_ID}?meta=false`, {
        headers: {
          'X-Access-Key': JSONBIN_X_ACCESS_KEY
        }
      })
        .then((response) => response.json())
        .then((certificates: IProjectJson[]) => {
          if (!Array.isArray(certificates)) {
            this.iAm.certificates = []
          } else {
            this.iAm.certificates = certificates.map(
              (certificate: IProjectJson): IProject => ({
                ...certificate,
                from: new Date(certificate.from[0], certificate.from[1]),
                to: new Date(certificate.to[0], certificate.to[1])
              })
            )
          }
        })
        .finally(() => {
          this.isLoading = false
          return Promise.resolve()
        })
    }
  }
})
