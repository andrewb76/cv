<template>
  <div class="btn-group w-full self-end">
    <div @click.stop="goToItemByIndex(prev)" class="btn">❮</div>
    <div @click.stop="closeModal()" class="btn grow">
      {{ $t('common.close') }}
    </div>
    <div @click.stop="goToItemByIndex(next)" class="btn">❯</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    prev: {
      type: Number,
      required: true,
    },
    next: {
      type: Number,
      required: true,
    },
    goToItemByIndex: {
      type: Function as PropType<(newInd: number) => void>,
      required: true,
    },
    closeModal: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
})
</script>
