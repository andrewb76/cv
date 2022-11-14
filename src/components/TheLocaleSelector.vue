<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="lang in langs" :key="lang.key" :value="lang.key">
        {{ lang.flag }}
        {{ $t(`localSwitcher.${lang.key.toUpperCase()}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'locale-changer',
  data: () => {
    return {
      langs: [
        {
          key: 'ru',
          flag: '🇷🇺',
        },
        {
          key: 'en',
          flag: '🇬🇧',
        },
      ],
    }
  },
})
</script>

<style scoped lang="scss">
option {
  background-image: url('~@/assets/img/icons/flags/ru.png');
}
</style>
