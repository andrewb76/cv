<template>
  <div class="w-full h-full tech-cloud">
    <resize-observer @notify="handleResize" />
    <text-cloud
      elClass="tech"
      :data="list"
      :fontSizeMapper="fontSizeMapper"
      :onWordClick="onTechClick"
      :onWordOver="onTechOver"
      :onWordOut="onTechOut"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextCloud from "@/components/TextCloud.vue";
import "vue-resize/dist/vue-resize.css";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ResizeObserver } = require("vue-resize");

export default defineComponent({
  name: "TheCloud",
  components: {
    TextCloud,
    ResizeObserver,
  },
  props: {
    list: {
      type: Array,
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
  setup(props, context) {
    const handleResize = () => {
      // TODO implement resize functionality
    };

    const onTechClick = (value: string) => {
      console.log("setHover", value);
      context.emit("setHover", { area: "tech", value });
    };
    const onTechOver = (value: string) => {
      console.log("onHover", value);
      context.emit("onHover", { area: "tech", value });
    };
    const onTechOut = () => {
      console.log("onHover", " out ");
      context.emit("setHover", { area: "tech", value: "" });
    };
    return {
      handleResize,
      onTechClick,
      onTechOver,
      onTechOut,
      fontSizeMapper: (word: { value: number }) => Math.log2(word.value) * 15,
    };
  },
});
</script>

<style lang="scss" scoped>
.hovered {
  // filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
.tech {
  opacity: 0.5;
  fill: dark-gray;
  transition: opacity 1s;
  text-shadow: 2px 2px 5px #fff;

  &:hover {
    fill: #fff;
    animation: glow 1s ease-in-out infinite alternate;
  }

  &-selected {
    opacity: 0.8;
    fill: #fff;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    $base1-color: #c0b098;
    $base2-color: #f0d6b9;
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px $base1-color,
        0 0 40px $base1-color, 0 0 50px $base1-color, 0 0 60px $base1-color,
        0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px $base2-color, 0 0 40px $base2-color,
        0 0 50px $base2-color, 0 0 60px $base2-color, 0 0 70px $base2-color,
        0 0 80px #ff4da6;
    }
  }
}
</style>
