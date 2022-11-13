<template>
  <transition-group
    name="projects-list"
    tag="div"
    class="projects-list flex justify-self-stretch max-w-screen overflow-hidden"
  >
    <button
      class="project flex"
      v-for="(project, i) in list"
      :key="project"
      :style="{ '--i': i, '--total': list.length }"
      :class="{
        'project-selected': selectedList.concat(groupList).includes(project),
      }"
      @click.prevent="onProjectClick()"
      @mouseover="onProjectMouseOver()"
      @mouseout="onProjectMouseOut"
    >
      <div class="project-title flex">
        {{ dictionary[project].short }}
      </div>
      <img
        class="project-flag p-1 absolute"
        :alt="dictionary[project].title[$i18n.locale]"
        :title="dictionary[project].title[$i18n.locale]"
        :src="getFlagImgUrl(dictionary[project].country)"
        style="opacity: 0.8; scale: 0.8"
      />
    </button>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { IProject } from "@/store/projectsInterfaces";

export default defineComponent({
  name: "TheYears",
  emits: {
    changeDialogMode() {
      return true;
    },
  },
  props: {
    dictionary: {
      type: Object as PropType<{ [key: string]: IProject }>,
      default: () => ({}),
    },
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
    const getFlagImgUrl = (cc: string) => {
      try {
        return require(`@/assets/img/icons/flags/${cc}.png`);
      } catch {
        return require(`@/assets/img/icons/flags/ru.png`);
      }
    };
    const getCertIconUrl = () => {
      return require(`@/assets/img/icons/certificate-6.svg`);
    };
    const onProjectClick = () => true;
    const onProjectMouseOver = () => true;
    const onProjectMouseOut = () => true;

    return {
      onProjectClick,
      onProjectMouseOver,
      onProjectMouseOut,
      getFlagImgUrl,
      getCertIconUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  cursor: pointer;
  color: rgb(253, 247, 238);
  text-shadow: rgb(83, 68, 50) 3px 4px 3px;
  overflow: hidden;
  display: flex;
  //   // width: 40px;
  //   position: relative;
  border: 3px solid rgba(44, 44, 44, 0.855);
  // margin: 1px;
  padding: 2px;
  margin: 1px;
  background-color: rgba(189, 170, 158, 0.3);
  position: relative;

  &::after {
    position: relative;
    display: block;
    overflow: visible;
    content: "";
    width: 10px;
    height: 10px;
    left: -20px;
    transition-duration: 1s;
    background-color: rgba(192, 31, 31, 0.562);
    text-shadow: rgb(83, 68, 50) 3px 4px 3px;
  }

  &:hover,
  &-selected {
    background-color: rgba(189, 170, 158, 0.5);
  }

  &:hover::after,
  &-selected::after {
    height: 160px;
    bottom: 0;
    background-color: rgb(252, 2, 2);
  }

  &-flag {
    top: -10px;
    right: -10px;
    filter: grayscale(100%);
    transition: 0.4s;
  }
  &:hover &-flag {
    top: -5px;
    right: -5px;
    filter: grayscale(0);
  }

  &-title {
    z-index: 1;
    rotate: 180deg;
    translate: 0 -15px;
    writing-mode: vertical-rl;
    text-align: start;
    padding-bottom: 25px;
  }
}
</style>
