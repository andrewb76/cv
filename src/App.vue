<template>
  <!-- <the-main-menu class="main-menu fixed top-10 left-10" :links="links" /> -->
  <!-- <the-locale-selector class="locale-selector top-5 right-0 fixed" /> -->
  <!-- <transition name="fade" mode="out-in"> -->
  <router-view />
  <!-- </transition> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import TheMainMenu from "@/components/TheMainMenu.vue";
// import TheLocaleSelector from "@/components/TheLocaleSelector.vue";

export default defineComponent({
  components: {
    // TheMainMenu,
    // TheLocaleSelector,
  },
  setup: () => {
    return {
      links: [
        { name: "home", url: "/", title: "Home" },
        { name: "about", url: "/about", title: "About" },
        { name: "projects", url: "/projects", title: "Projects" },
        { name: "cv", url: "/cv", title: "CV" },
        { name: "projects", url: "/projects", title: "Projects" },
      ],
    };
  },
});
</script>
<style lang="scss">
.fade {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease-out;
  }
}
.main-menu {
  position: fixed;
}
</style>
