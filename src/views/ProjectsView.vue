<template>
  <container class="portfolio w-screen h-screen">
    <header class="years">
      <the-years
        :dictionary="projectsStore.projectDic"
        :list="projectsStore.years"
        :selectedList="projectsStore.selected.years"
        :groupList="projectsStore.currentGroup.years"
        @setHover="setHover"
        @changeDialogMode="changeDialogMode"
      ></the-years>
    </header>
    <section class="projects-description">
      <h1>Projects Drscription</h1>
    </section>
    <section class="tech-icons">
      <h1>TechIcons</h1>
    </section>
    <section class="tech-cloud">
      <h1>TechCloud</h1>
      <the-cloud
        :list="projectsStore.techKeys"
        :selectedList="projectsStore.selected.techs"
        :groupList="projectsStore.currentGroup.techs"
      ></the-cloud>
    </section>
    <footer class="projects max-w-screen">
      <the-projects
        :dictionary="projectsStore.projectDic"
        :list="projectsStore.projectKeys"
        :selectedList="projectsStore.selected.projects"
        :groupList="projectsStore.currentGroup.projects"
        @onHover="onHover"
        @setHover="setHover"
        @changeDialogMode="changeDialogMode"
      ></the-projects>
    </footer>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useProjectsStore } from "@/store/projectsStore";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { config } from "@/config";
import TheProjects from "@/components/projects/TheProjects.vue";
import TheYears from "@/components/projects/TheYears.vue";
import TheCloud from "@/components/projects/TheCloud.vue";

export default defineComponent({
  name: "ProjectsView",
  components: {
    TheProjects,
    TheYears,
    TheCloud,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const hover$ = new Subject();

    onMounted(() => {
      projectsStore.init();

      hover$.pipe(debounceTime(config.debounceTime)).subscribe((params) => {
        projectsStore.setHover(params as { area: string; value: string });
      });
    });

    const onHover = (params: { area: string; value: string }) => {
      hover$.next(params);
    };
    const setHover = () => {
      projectsStore.changeDialogMode();
    };
    const changeDialogMode = () => {
      projectsStore.changeDialogMode();
    };

    return {
      projectsStore,
      onHover,
      setHover,
      changeDialogMode,
    };
  },
});
</script>

<style lang="scss" scoped>
.portfolio {
  height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/img/city-wallpaper-18.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: grid;
  grid-template-columns: 20px repeat(3, 1fr) 20px;
  grid-template-rows: 95px 32px 16px 1fr 170px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.years {
  grid-area: 1 / 1 / 2 / 6;
}
.projects-description {
  margin: 5px;
  grid-area: 2 / 2 / 3 / 5;
}
.tech-icons {
  grid-area: 3 / 1 / 4 / 6;
}
.tech-cloud {
  grid-area: 4 / 1 / 5 / 6;
}
.projects {
  grid-area: 5 / 1 / 6 / 6;
}
</style>
