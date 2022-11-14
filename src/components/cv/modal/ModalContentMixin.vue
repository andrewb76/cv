<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IProject } from '@/store/projectsInterfaces'

export default defineComponent({
  props: {
    goNext: {
      type: Function,
      required: true,
    },
    data: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
})
</script>
