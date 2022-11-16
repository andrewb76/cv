<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IiAm, IProject } from '@/store/cvInterfaces'
import { useProjectsStore } from '@/store/projectsStore'
import { useCVStore } from '@/store/cvStore'
import TheMainInfo from '@/components/cv/TheMainInfo.vue'
import TheEducations from '@/components/cv/TheEducations.vue'
import TheLanguages from '@/components/cv/TheLanguages.vue'
import TheCertifications from '@/components/cv/TheCertifications.vue'
import TheProjects from '@/components/cv/TheProjects.vue'
import TheCertificationsModal from '@/components/cv/modal/TheCertificationsModal.vue'
import TheProjectsModal from '@/components/cv/modal/TheProjectsModal.vue'
import TheContacts from '@/components/cv/TheContacts.vue'
import TheSkills from '@/components/cv/TheSkills.vue'
import TheSummary from '@/components/cv/TheSummary.vue'
import TheExperience from '@/components/cv/TheExperience.vue'

export default defineComponent({
  components: {
    TheSummary,
    TheEducations,
    TheLanguages,
    TheCertifications,
    TheSkills,
    TheExperience,
    TheContacts,
    TheMainInfo,
    TheProjects,
    TheCertificationsModal,
    TheProjectsModal,
  },
  setup() {
    const cvStore = useCVStore()
    const projectsStore = useProjectsStore()
    cvStore.init()
    projectsStore.init()
    const educations = computed(() => projectsStore.educations as IProject[])
    const projects = computed(() => projectsStore.projects as IProject[])
    const projectsIsLoading = computed(() => projectsStore.isLoading)
    const certificatesIsLoading = computed(() => cvStore.isLoading)
    const certificates = computed(() => cvStore.iAm.certificates as IProject[])
    const iAm = computed(() => cvStore.iAm as IiAm)
    return {
      iAm,
      educations,
      projects,
      certificates,
      projectsIsLoading,
      certificatesIsLoading
    }
  },
})
</script>
<template>
  <main class="md:container md:mx-auto main-container md:m-4">
    <div class="about grid gap-5 lg:grid-cols-3">
      <div class="space-y-5">
        <the-main-info :data="iAm" />
        <the-contacts :data="iAm.contacts" />
        <the-educations :data="educations" :isLoading="projectsIsLoading" />
        <the-languages :data="iAm.languages" />
        <the-certifications :data="certificates" :isLoading="certificatesIsLoading" />
        <the-skills :data="iAm.skills" />
      </div>
      <div class="space-y-5 lg:col-span-2">
        <!-- Start Right Side -->
        <the-summary :data="iAm.summary" />
        <the-experience :data="iAm.experience" :isLoading="certificatesIsLoading" />
        <the-projects :data="projects" />
      </div>
    </div>
  </main>
  <the-certifications-modal :data="certificates" :isLoading="certificatesIsLoading" />
  <the-projects-modal :data="projects" :isLoading="projectsIsLoading" />
</template>
<style scoped lang="scss">
.block-section {
  background-color: rgb(248, 246, 246);
  border-radius: 0.75rem;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.download-btn {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
  background-color: rgba(139, 92, 246, 1);
  color: rgba(255, 255, 255, 1);
  width: 100%;
  &:hover {
    background-color: rgba(124, 58, 237, 1);
  }
}
.download-btn-icon {
  background-color: rgba(124, 58, 237, 1);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: rgba(255, 255, 255, 1);
}
</style>
