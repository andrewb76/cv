<template>
  <cv-section s_name="skills">
    <div class="skills text-justify flex flex-wrap">
      <template v-for="(skillSet, i) in skills" :key="i">
        <span
          class="skill-tag bg-light-900 px-2"
          v-for="skill in skillSet.split(' ')"
          :key="skill"
          v-text="`${skill} `"
          :class="{
            'tag-gr__selected': i.toString() === hoveredGroup,
            'tag-gr': i % 2,
          }"
          @mouseover="onMouseOver(`${i}`)"
          @mouseout="onMouseOut"
        />
      </template>
    </div>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CvSection from './CvSection.vue' // @ is an alias to /src

export default defineComponent({
  components: {
    CvSection,
  },
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
  setup(props) {
    const hoveredGroup = ref('')
    const onMouseOver = (gr: string) => {
      hoveredGroup.value = gr
    }
    const onMouseOut = () => {
      hoveredGroup.value = ''
    }

    return {
      onMouseOver,
      onMouseOut,
      hoveredGroup,
      skills: props.data.map((ss) => (ss as string[]).join(' ')),
    }
  },
})
</script>

<style scoped lang="scss">
.skill-tag {
  text-indent: 0px;
  background-color: rgba(237, 233, 254, 1);
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0.25rem;
}
.tag-gr {
  background-color: rgb(232, 255, 234);
  color: rgb(51, 51, 51);
  transition: background-color 0.7s;

  &__selected {
    background-color: rgb(54, 54, 54);
    color: rgb(219, 219, 219);
    transition: background-color 0.7s;
  }
}
</style>
