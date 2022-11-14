<template>
  <div class="flex flex-col w-full p-1">
    <a :href="data.url" target="_blank">
      <h3 class="text-sm">
        &#128279;
        <span class="underline">{{ data.description[$i18n.locale] }}</span>
      </h3>
    </a>
    <h2 class="text-base">
      {{ data.title[$i18n.locale] }}
    </h2>
  </div>
  <div class="grow">
    <div click="showCertMobile(nextCertIndex(i-1), true)">
      <img
        @click.stop="goNext()"
        :alt="data.title[$i18n.locale]"
        :src="require(`@/assets/img/cert/${data.img}`)"
        class="w-full cert-img cursor-pointer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalContentMixin from '@/components/cv/modal/ModalContentMixin.vue'

export default defineComponent({
  mixins: [ModalContentMixin],
})
</script>
