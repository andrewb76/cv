<template>
  <section :class="s_name" class="p-3 block-section">
    <transition name="fade" appear>
      <h2 :class="`block-title ${s_name}-head`" v-if="!hideHeader">
        {{ $t(`CV.${s_name}`) }}
      </h2>
    </transition>
    <transition name="fade2" mode="out-in">
      <cv-section-loader v-if="isLoading" />
      <div v-else :class="`block-body ${s_name}-body`"><slot /></div>
    </transition>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CvSectionLoader from '@/components/cv/CvSectionLoader.vue'


export default defineComponent({
  name: 'CvSection',
  components: {
    CvSectionLoader
  },
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    s_name: {
      type: String,
      required: false,
      default: ''
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .8s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade2-enter-active {
  transition: .5s ease;
  scale: 1;
}

.fade2-enter-from, .fade2-leave-to {
  scale: 0.5;
  opacity: 0;
}
.block-section {
  min-height: 150px;
}
.block-title {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.25rem;
}
.block-body {
  text-indent: 20px;
}
</style>
