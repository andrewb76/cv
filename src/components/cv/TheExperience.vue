<template>
  <cv-section s_name="experience">
    <div
      v-for="company in data.list"
      :key="company.company['en']"
      class="company m-4"
    >
      <div class="company_position">
        {{ company.position[$i18n.locale] }}
      </div>
      <div class="company_period text-sm f">
        {{ company.from[$i18n.locale] }} — {{ company.to[$i18n.locale] }}
      </div>
      <div class="company_company text-sm font-bold">
        {{ company.company[$i18n.locale] }}
      </div>
      <ul class="company_responsibilities ml-2">
        <li
          v-for="resp in company.responsibilities"
          :key="resp.en"
          class="text-justify"
        >
          {{ resp[$i18n.locale] }}
        </li>
      </ul>
    </div>
  </cv-section>
</template>

<script lang="ts">
// Experiences component
import { defineComponent, PropType } from 'vue'
import CvSection from './CvSection.vue'
import { IExperience } from '@/store/myExperience'

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      type: Object as PropType<IExperience>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
