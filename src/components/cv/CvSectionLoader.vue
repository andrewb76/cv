<template>
  <div class="section-loader" v-if="isLoading">
    Loading ...
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CvSectionLoader',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style scoped lang="scss">
.section-loader {
  background-color: pink;
}
</style>
