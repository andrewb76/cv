<template>
  <transition-group name="years-list" tag="div" class="years-list flex">
    <div
      class="year grow flex"
      v-for="(year, index) in list"
      :key="year"
      :style="{ '--i': index, '--total': list.length }"
      @mouseover="onYearMouseOver()"
      @mouseout="onYearMouseOut()"
      @click.prevent="onYearClick()"
    >
      <div
        class="year-title flex"
        :class="{
          'year-title-selected': selectedList.concat(groupList).includes(year),
        }"
      >
        {{ year }}
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TheYears',
  emits: {
    setHover() {
      return true
    },
    onHover() {
      return true
    },
  },
  props: {
    list: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    selectedList: {
      type: Array,
      default: () => [],
    },
    groupList: {
      type: Array,
      default: () => [],
    },
  },
  setup: () => {
    const onYearClick = () => true
    const onYearMouseOver = () => true
    const onYearMouseOut = () => true

    return {
      onYearClick,
      onYearMouseOver,
      onYearMouseOut,
    }
  },
})
</script>

<style lang="scss" scoped>
.years-list {
  width: 100%;
  height: 100%;

  &-move {
    transition: opacity 0.5s linear, transform 0.5s ease-in-out;
  }

  &-leave-active {
    transition: opacity 0.4s linear,
      transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4); //cubic-bezier(.7,0,.7,1);
    transition-delay: calc(0.1s * (var(--total) - var(--i)));
  }

  &-enter-active {
    transition: opacity 0.5s linear,
      transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
    transition-delay: calc(0.03s * var(--i));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter {
    transform: translateX(-1em);
  }
  &-leave-to {
    transform: translateX(1em);
  }

  .year {
    cursor: pointer;
    .year-title {
      width: 100%;
      padding: 5px;
      writing-mode: tb-rl;
      rotate: 180deg;
      --str-color-h: #520000;
      --str-color: #222222;
      --fill-color: #fd3535;
      font: 550 1.8rem Raleway, sans-serif;
      text-decoration: none;
      -webkit-text-stroke: 1px var(--str-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      // background: linear-gradient(#e66465, #9198e5) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
      background-size: 100% 0;
      background-position: top;

      &:hover,
      &-selected {
        -webkit-text-stroke: 1px var(--str-color-h);
        background-size: 100% 100%;
        // text-shadow: 1px 1px 3px #fd3535;
      }
    }
  }
}
.year {
  justify-content: center;
}
</style>
