<template>
  <cv-section s_name="summary">
    <template #head>&nbsp;</template>
    <div class="section__body m-5 text-justify">
      {{ data[$i18n.locale] }}
    </div>
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
      type: Object,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
