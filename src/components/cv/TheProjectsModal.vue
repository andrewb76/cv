<template>
  <input
    type="checkbox"
    id="projects-modal"
    :checked="projectsModalVisible"
    class="modal-toggle"
  />
  <div
    class="modal sm:modal-bottom md:modal-middle"
    @click="showProjectsMobile(0, false)"
  >
    <div class="modal-box flex flex-col" @click.stop="() => {}">
      <div class="box-content w-full flex grow flex-col md:flex-row">
        <div class="md:w-1/3">
          <a :href="`#projects-${nextProjectsIndex(projectsModalIndex)}`">
            <img
              class="project-screen"
              :alt="`@/assets/img/screens/${data[projectsModalIndex].img}`"
              :src="
                require(`@/assets/img/screens/${data[projectsModalIndex].img}`)
              "
            />
          </a>
        </div>
        <div class="md:w-2/3 p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-700 font-semibold"
          >
            {{ data[projectsModalIndex].title[$i18n.locale] }}
          </div>
          <div
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {{ data[projectsModalIndex].from.getFullYear() }}
            -
            {{ data[projectsModalIndex].to?.getFullYear() }}
          </div>
          <p
            class="mt-2 p-2 text-gray-500 h-full overflow-auto max-h-56 min-h-8 text-justify"
          >
            {{ data[projectsModalIndex].description[$i18n.locale] }}
          </p>
        </div>
      </div>
      <div class="techStack flex flex-wrap justify-evenly m-2">
        <img
          v-for="tt in data[projectsModalIndex].techStack"
          :key="tt"
          :alt="tt"
          :title="tt"
          class="w-8 p-1"
          :src="getTechImgUrl(tt)"
        />
      </div>
      <div class="projecs-pager w-full flex justify-evenly">
        <span
          v-for="index in data.length"
          :key="index"
          class="projects-pager-item cursor-pointer"
          :class="{
            'projects-pager-item--selected': projectsModalIndex === index - 1,
          }"
          @click.stop="showProjectsMobile(index - 1, true)"
        >
          *
        </span>
      </div>
      <div class="btn-group">
        <div
          @click.stop="
            showProjectsMobile(prevProjectsIndex(projectsModalIndex), true)
          "
          class="btn"
        >
          ❮
        </div>
        <div @click.stop="showProjectsMobile(0, false)" class="btn grow">
          {{ $t("common.close") }}
        </div>
        <div
          @click.stop="
            showProjectsMobile(nextProjectsIndex(projectsModalIndex), true)
          "
          class="btn"
        >
          ❯
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IProject } from "@/store/projects";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
  setup(props) {
    const projectsModalVisible = ref(false);
    const projectsModalIndex = ref(0);
    const router = useRouter();

    const route = useRoute();
    const routeHash = route.hash;
    if (routeHash.includes("-")) {
      const [key, val] = routeHash.split("-");
      if (key === "#projects") {
        projectsModalVisible.value = true;
        projectsModalIndex.value = parseInt(val || "0");
        router.replace({ path: "/" });
      }
    }

    watch(
      () => route.hash,
      async (routeHash) => {
        const [key, val] = routeHash.split("-");
        if (key === "#projects") {
          projectsModalVisible.value = true;
          router.replace({ path: "/" });
          projectsModalIndex.value = parseInt(val || "0");
        }
      }
    );

    const prevProjectsIndex = (index: number) => {
      if (index === 0) {
        return props.data.length - 1;
      }
      return index - 1;
    };
    const nextProjectsIndex = (index: number) => {
      if (index === props.data.length - 1) {
        return 0;
      }
      return index + 1;
    };
    const showProjectsMobile = (index: number, flag = true) => {
      projectsModalVisible.value = flag;
      projectsModalIndex.value = index;
    };

    const getTechImgUrl = (tech: string) => {
      try {
        return require(`@/assets/img/icons/${tech}.svg`);
      } catch {
        return require(`@/assets/img/icons/amazons3.svg`);
      }
    };

    return {
      showProjectsMobile,
      projectsModalVisible,
      projectsModalIndex,
      prevProjectsIndex,
      nextProjectsIndex,
      getTechImgUrl,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-box {
  max-width: 54rem;
  min-height: 32rem;
  .project-screen {
    width: 55rem;
  }
}
.projects-pager-item {
  transform: scale(1);
  font-weight: 200;

  &:hover {
    transform: scale(1.5);
  }
  &--selected {
    font-weight: 900;
  }
}
</style>
