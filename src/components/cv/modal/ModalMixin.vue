<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    prevItemIndex: (total: number, index: number) => {
      if (index === 0) {
        return total - 1
      }
      return index - 1
    },
    nextItemIndex: (total: number, index: number) => {
      if (index === total - 1) {
        return 0
      }
      return index + 1
    },
  },
})
</script>
