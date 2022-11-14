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
import { IProject } from '@/store/projectsInterfaces'
import CvSection from './CvSection.vue' // @ is an alias to /src

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
