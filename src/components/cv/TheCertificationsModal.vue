<template>
  <input
    type="checkbox"
    id="cert-modal"
    :checked="certModalVisible"
    class="modal-toggle"
  />
  <div
    class="modal modal-bottom sm:modal-middle min-w-min cursor-pointer"
    @click="showCertMobile(0, false)"
  >
    <div
      class="modal-box overflow-hidden h-full flex flex-col min-h-min"
      @click.stop="() => {}"
    >
      <div class="flex flex-col w-full p-1">
        <a :href="data[certModalIndex].url" target="_blank">
          <h3 class="text-sm">
            &#128279;
            <span class="underline">{{
              data[certModalIndex].description[$i18n.locale]
            }}</span>
          </h3>
        </a>
        <h2 class="text-base">
          {{ data[certModalIndex].title[$i18n.locale] }}
        </h2>
      </div>
      <div class="grow">
        <div click="showCertMobile(nextCertIndex(i-1), true)">
          <img
            @click.stop="showCertMobile(nextCertIndex(certModalIndex), true)"
            :alt="data[certModalIndex].title[$i18n.locale]"
            :src="require(`@/assets/img/cert/${data[certModalIndex].img}`)"
            class="w-full cert-img cursor-pointer"
          />
        </div>
      </div>

      <div class="techStack flex flex-wrap justify-evenly m-2">
        <img
          v-for="tt in data[certModalIndex].techStack"
          :key="tt"
          :alt="tt"
          :title="tt"
          class="w-8 p-1"
          :src="getTechImgUrl(tt)"
        />
      </div>

      <ul class="flex justify-around my-10">
        <li v-for="index in data.length" :key="index">
          <div class="cursor-pointer">
            <img
              @click.stop="showCertMobile(index - 1, true)"
              :src="
                require(`@/assets/img/icons/certificate${
                  certModalIndex === index - 1 ? '-selected' : ''
                }.svg`)
              "
              width="20"
              height="20"
              :alt="`certificate item ${index}`"
            />
          </div>
        </li>
      </ul>
      <div class="btn-group w-full self-end">
        <div
          @click.stop="showCertMobile(prevCertIndex(certModalIndex), true)"
          class="btn"
        >
          ❮
        </div>
        <div @click.stop="showCertMobile(0, false)" class="btn grow">
          {{ $t("common.close") }}
        </div>
        <div
          @click.stop="showCertMobile(nextCertIndex(certModalIndex), true)"
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
import { IProject } from "@/store/projectsInterfaces";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<IProject[]>,
      required: true,
    },
  },
  setup(props) {
    const certModalVisible = ref(false);
    const certModalIndex = ref(0);
    const router = useRouter();

    const route = useRoute();
    const routeHash = route.hash;
    if (routeHash.includes("-")) {
      const [key, val] = routeHash.split("-");
      if (key === "#cert") {
        certModalVisible.value = true;
        certModalIndex.value = parseInt(val);
        router.replace({ path: "/" });
      }
    }

    const prevCertIndex = (index: number) => {
      if (index === 0) {
        return props.data.length - 1;
      }
      return index - 1;
    };
    const nextCertIndex = (index: number) => {
      if (index === props.data.length - 1) {
        return 0;
      }
      return index + 1;
    };
    const showCertMobile = (index: number, flag = true) => {
      certModalVisible.value = flag;
      certModalIndex.value = index;
    };

    const getTechImgUrl = (tech: string) => {
      try {
        return require(`@/assets/img/icons/${tech}.svg`);
      } catch {
        return require(`@/assets/img/icons/amazons3.svg`);
      }
    };

    watch(
      () => route.hash,
      async (routeHash) => {
        const [key, val] = routeHash.split("-");
        if (key === "#cert") {
          certModalVisible.value = true;
          certModalIndex.value = parseInt(val);
          router.replace({ path: "/" });
        }
      }
    );

    return {
      showCertMobile,
      certModalVisible,
      certModalIndex,
      prevCertIndex,
      nextCertIndex,
      getTechImgUrl,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-box {
  max-width: 42rem;
}
</style>
