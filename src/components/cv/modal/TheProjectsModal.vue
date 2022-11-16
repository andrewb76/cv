<template>
  <input
    type="checkbox"
    id="projects-modal"
    :checked="projectsModalVisible"
    class="modal-toggle"
  />
  <div
    class="modal sm:modal-bottom md:modal-middle"
    @click="showProjectsModal(0, false)"
  >
    <div class="modal-box flex flex-col" @click.stop="() => {}">
      <the-projects-modal-content
        :data="data[projectsModalIndex]"
        :goNext="
          () =>
            showProjectsModal(
              nextItemIndex(data.length, projectsModalIndex),
              true
            )
        "
      />
      <modal-tech-stack :data="data[projectsModalIndex].techStack" />
      <modal-pager
        iconName="bul"
        :totalItems="data.length"
        :currentItem="projectsModalIndex"
        :goToItemByIndex="(itemIndex) => showProjectsModal(itemIndex, true)"
      />
      <modal-nav-close-btn
        :prev="prevItemIndex(data.length, projectsModalIndex)"
        :next="nextItemIndex(data.length, projectsModalIndex)"
        :goToItemByIndex="(itemIndex) => showProjectsModal(itemIndex, true)"
        :closeModal="() => showProjectsModal(0, false)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { IProject } from '@/store/cvInterfaces'
import ModalTechStack from '@/components/cv/modal/ModalTechStack.vue'
import ModalMixin from '@/components/cv/modal/ModalMixin.vue'
import ModalPager from '@/components/cv/modal/ModalPager.vue'
import ModalNavCloseBtn from '@/components/cv/modal/ModalNavCloseBtn.vue'
import TheProjectsModalContent from '@/components/cv/modal/TheProjectsModalContent.vue'

export default defineComponent({
  mixins: [ModalMixin],
  components: {
    TheProjectsModalContent,
    ModalTechStack,
    ModalPager,
    ModalNavCloseBtn,
  },
  props: {
    data: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
  setup() {
    console.log('setup >>>>>>>');
    const projectsModalVisible = ref(false)
    const projectsModalIndex = ref(0)
    const router = useRouter()

    const route = useRoute()
    const routeHash = route.hash
    if (routeHash.includes('-')) {
      const [key, val] = routeHash.split('-')
      if (key === '#projects') {
        projectsModalVisible.value = true
        projectsModalIndex.value = parseInt(val || '0')
        console.log('::::', projectsModalVisible.value, projectsModalIndex.value);
        router.replace({ path: '/' })
      }
    }

    watch(
      () => route.hash,
      async (routeHash) => {
        const [key, val] = routeHash.split('-')
        if (key === '#projects') {
          projectsModalVisible.value = true
          router.replace({ path: '/' })
          projectsModalIndex.value = parseInt(val || '0')
        }
      }
    )
    const showProjectsModal = (index: number, flag = true) => {
      projectsModalVisible.value = flag
      projectsModalIndex.value = index
    }

    return {
      showProjectsModal,
      projectsModalVisible,
      projectsModalIndex,
    }
  },
})
</script>

<style scoped lang="scss">
.modal-box {
  max-width: 54rem;
  min-height: 32rem;
  .project-screen {
    width: 55rem;
  }
}
</style>
