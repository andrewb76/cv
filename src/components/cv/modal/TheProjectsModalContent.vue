<template>
  <div class="box-content w-full flex grow flex-col md:flex-row">
    <div class="md:w-1/3">
      <img
        @click.stop="goNext()"
        class="project-screen cursor-pointer"
        :alt="`@/assets/img/screens/${data.img}`"
        :src="require(`@/assets/img/screens/${data.img}`)"
      />
    </div>
    <div class="md:w-2/3 p-8">
      <div
        class="uppercase tracking-wide text-sm text-indigo-700 font-semibold"
      >
        {{ data.title[$i18n.locale] }}
      </div>
      <div
        class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
      >
        {{ data.from.getFullYear() }}
        -
        {{ data.to?.getFullYear() }}
      </div>
      <p class="mt-2 p-2 text-gray-500 overflow-auto h-56 text-justify">
        {{ data.description[$i18n.locale] }}
      </p>
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
