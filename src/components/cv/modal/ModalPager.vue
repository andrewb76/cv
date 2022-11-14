<template>
  <ul class="flex justify-around my-10">
    <li v-for="index in totalItems" :key="index">
      <div class="cursor-pointer">
        <img
          @click.stop="goToItemByIndex(index - 1)"
          :src="
            require(`@/assets/img/icons/${iconName}${
              currentItem === index - 1 ? '-selected' : ''
            }.svg`)
          "
          width="20"
          height="20"
          :alt="`certificate item ${index}`"
        />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    currentItem: {
      type: Number,
      required: true,
    },
    goToItemByIndex: {
      type: Function as PropType<(newInd: number) => void>,
      required: true,
    },
  },
})
</script>
<style scoped lang="scss">
.projects-pager-item {
  transform: scale(1);
  font-weight: 200;

  &:hover {
    transform: scale(1.5);
  }
  &--selected {
    font-weight: 900;
  }
}
</style>
