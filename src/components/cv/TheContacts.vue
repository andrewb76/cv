<template>
  <cv-section s_name="contacts">
    <div class="section__body flex justify-between">
      <div class="">
        <p class="text-left">{{ data.city[$i18n.locale] }}</p>
        <p class="text-left text-sm">{{ data.address[$i18n.locale] }}</p>
        <p class="text-left text-sm">
          <a target="_blank" :href="data.contacts.home.url">
            {{ data.contacts.home.title }}
          </a>
        </p>
        <a
          target="_blank"
          :href="data.contacts.telegram.url"
          :v-text="data.contacts.telegram.title"
        />
      </div>
      <div class="grow">
        <p class="text-right">{{ data.contacts.phone.title }}</p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.contacts.email.url">
            {{ data.contacts.email.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.contacts.telegram.url">
            {{ data.contacts.telegram.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.contacts.github.url">
            {{ data.contacts.github.title }}
          </a>
        </p>
        <p class="text-right text-sm">
          <a target="_blank" :href="data.contacts.linkedIn.url">
            {{ data.contacts.linkedIn.title }}
          </a>
        </p>
      </div>
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
