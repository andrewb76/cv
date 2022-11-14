<template>
  <div class="techStack flex flex-wrap justify-evenly m-2">
    <img
      v-for="tt in data"
      :key="tt"
      :alt="tt"
      :title="tt"
      class="w-8 p-1"
      :src="getTechImgUrl(tt)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  methods: {
    getTechImgUrl: (tt: string) => {
      try {
        return require(`@/assets/img/icons/${tt}.svg`)
      } catch {
        return require(`@/assets/img/icons/amazons3.svg`)
      }
    },
  },
})
</script>
