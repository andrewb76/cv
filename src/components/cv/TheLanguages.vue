<template>
  <cv-section s_name="languages">
    <ul class="section__body ml-2">
      <li v-for="lang in data" :key="lang.en">
        {{ lang[$i18n.locale] }}
      </li>
    </ul>
  </cv-section>
</template>

<script lang="ts">
// Languages component
import { defineComponent, PropType } from 'vue'
import CvSection from './CvSection.vue'
import { IEnRu } from '@/store/aboutMe'

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      type: Array as PropType<IEnRu[]>,
      required: true,
    },
  },
})
</script>
