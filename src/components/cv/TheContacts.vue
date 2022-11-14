<template>
  <cv-section s_name="contacts">
    <div class="section__body flex justify-between">
      <div class="">
        <p class="text-left">{{ data.city[$i18n.locale] }}</p>
        <p class="text-left text-sm">{{ data.address[$i18n.locale] }}</p>
        <p class="text-left text-sm">
          <a target="_blank" :href="data.home.url">
            {{ data.home.title }}
          </a>
        </p>
        <a
          target="_blank"
          :href="data.telegram.url"
          :v-text="data.telegram.title"
        />
      </div>
      <div class="grow">
        <p class="text-right">{{ data.phone.title }}</p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.email.url">
            {{ data.email.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.telegram.url">
            {{ data.telegram.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.github.url">
            {{ data.github.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.linkedIn.url">
            {{ data.linkedIn.title }}
          </a>
        </p>
      </div>
    </div>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CvSection from './CvSection.vue' // @ is an alias to /src
import { IContacts } from '@/store/aboutMe'

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      type: Object as PropType<IContacts>,
      required: true,
    },
  },
})
</script>
