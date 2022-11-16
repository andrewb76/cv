<template>
  <cv-section s_name="educations" :isLoading="isLoading">
    <div v-for="ed in data" :key="ed.key" class="section__body text-justify">
      {{ ed.description[$i18n.locale] }}
    </div>
  </cv-section>
</template>

<script lang="ts">
// The Educations component
import { defineComponent, PropType } from 'vue'
import { IProject } from '@/store/cvInterfaces'
import CvSection from './CvSection.vue'

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
    data: {
      type: Object as PropType<IProject[]>,
      required: true,
    },
  },
})
</script>
