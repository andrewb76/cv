<template>
  <nav class="main-menu">
    <router-link
      v-for="ln in links"
      :key="ln.url"
      :class="`${ln.name}-link`"
      :title="ln.title"
      :to="ln.url"
      >{{ ln.title }}</router-link
    >
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TheMainMenu",
  props: {
    links: {
      type: Array as PropType<{ name: string; url: string; title: string }[]>,
      required: false,
      default: () => [{ name: "home", url: "/", title: "Home" }],
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
