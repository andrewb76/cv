<template>
  <cv-section s_name="languages">
    <ul class="section__body ml-2">
      <li v-for="lang in data" :key="lang.en">
        {{ lang[$i18n.locale] }}
      </li>
    </ul>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CvSection from "./CvSection.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
