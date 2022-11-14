<template>
  <cv-section s_name="projects">
    <div class="section__body">
      <a href="/#projects" class="projects-link underline">{{
        $t('CV.view-projects')
      }}</a>
    </div>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CvSection from './CvSection.vue' // @ is an alias to /src

export default defineComponent({
  components: {
    CvSection,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
