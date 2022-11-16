<template>
  <input
    type="checkbox"
    id="cert-modal"
    :checked="certModalVisible"
    class="modal-toggle"
  />
  <div
    class="modal modal-bottom sm:modal-middle min-w-min cursor-pointer"
    @click="showCertModal(0, false)"
  >
    <div
      class="modal-box overflow-hidden h-full flex flex-col min-h-min"
      @click.stop="() => {}"
    >
      <cv-section-loader v-if="isLoading" />
      <div v-else>
        <the-certifications-modal-content
          :data="data[certModalIndex]"
          :goNext="
            () => showCertModal(nextItemIndex(data.length, certModalIndex), true)
          "
        />
        <modal-tech-stack :data="data[certModalIndex].techStack" />
        <modal-pager
          iconName="certificate"
          :totalItems="data.length"
          :currentItem="certModalIndex"
          :goToItemByIndex="(itemIndex) => {
            showCertModal(itemIndex, true)
          }"
        />
        <modal-nav-close-btn
          :prev="prevItemIndex(data.length, certModalIndex)"
          :next="nextItemIndex(data.length, certModalIndex)"
          :closeModal="() => showCertModal(0, false)"
          :goToItemByIndex="(itemIndex) => showCertModal(itemIndex, true)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { IProject } from '@/store/cvInterfaces'
import TheCertificationsModalContent from '@/components/cv/modal/TheCertificationsModalContent.vue'
import ModalTechStack from '@/components/cv/modal/ModalTechStack.vue'
import ModalMixin from '@/components/cv/modal/ModalMixin.vue'
import ModalPager from '@/components/cv/modal/ModalPager.vue'
import ModalNavCloseBtn from '@/components/cv/modal/ModalNavCloseBtn.vue'
import CvSectionLoader from '@/components/cv/CvSectionLoader.vue'

export default defineComponent({
  mixins: [ModalMixin],
  components: {
    TheCertificationsModalContent,
    ModalTechStack,
    ModalPager,
    ModalNavCloseBtn,
    CvSectionLoader
  },
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
  setup() {
    const certModalVisible = ref(false)
    const certModalIndex = ref(0)
    const router = useRouter()

    const route = useRoute()
    const routeHash = route.hash
    if (routeHash.includes('-')) {
      const [key, val] = routeHash.split('-')
      if (key === '#cert') {
        certModalVisible.value = true
        certModalIndex.value = parseInt(val || '0')
        console.log('))))))))))', certModalIndex.value, '))');
        router.replace({ path: '/' })
      }
    }

    const showCertModal = (index: number, flag = true) => {
      certModalVisible.value = flag
      certModalIndex.value = index
    }

    watch(
      () => route.hash,
      async (routeHash) => {
        const [key, val] = routeHash.split('-')
        if (key === '#cert') {
          certModalVisible.value = true
          certModalIndex.value = parseInt(val)
          router.replace({ path: '/' })
        }
      }
    )

    return {
      showCertModal,
      certModalVisible,
      certModalIndex,
    }
  },
})
</script>

<style scoped lang="scss">
.modal-box {
  max-width: 42rem;
}
</style>
