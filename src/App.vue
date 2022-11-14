<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup: () => {
    return {
      links: [
        { name: 'home', url: '/', title: 'Home' },
        { name: 'about', url: '/about', title: 'About' },
        { name: 'projects', url: '/projects', title: 'Projects' },
        { name: 'cv', url: '/cv', title: 'CV' },
        { name: 'projects', url: '/projects', title: 'Projects' },
      ],
    }
  },
})
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
