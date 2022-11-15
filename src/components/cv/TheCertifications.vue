<template>
  <cv-section s_name="certifications">
    <div class="section__body">
      <div
        class="certificate flex flex-col pb-3"
        v-for="(cert, index) in data"
        :key="cert.key"
      >
        <div class="flex justify-between">
          <p class="certificate__title text-sm font-semibold">
            {{ cert.title[$i18n.locale] }}
          </p>
          <p class="certificate__year text-sm font-light">
            {{ cert.to && cert.to.getFullYear() }}
          </p>
        </div>
        <div class="flex certificate__description w-full text-left self-start">
          <p class="w-full underline">
            <a :href="`#cert-${index}`">{{ cert.description[$i18n.locale] }}</a>
          </p>
        </div>
      </div>
    </div>
  </cv-section>
</template>

<script lang="ts">
// Certification component
import { defineComponent, PropType } from 'vue'
import { IProject } from '@/store/cvInterfaces'
import CvSection from './CvSection.vue'

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
})
</script>
