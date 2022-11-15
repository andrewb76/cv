<template>
  <cv-section s_name="educations">
    <div class="section__body text-justify">
      {{ data.description[$i18n.locale] }}
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
    data: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
})
</script>
