<template>
  <section :class="s_name" class="p-3 block-section">
    <slot name="head">
      <h2 :class="`block-title ${s_name}-head`">
        {{ $t(`CV.${s_name}`) }}
      </h2>
    </slot>
    <div :class="`block-body ${s_name}-body`"><slot /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CvSection',
  props: {
    s_name: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.block-title {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.25rem;
}
.block-body {
  text-indent: 20px;
}
</style>
