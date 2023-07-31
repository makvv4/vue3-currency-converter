<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'

const windowWidth = useWindowSize().width
</script>

<template>
  <div class="d-flex flex-wrap align-items-center justify-content-center mt-5 gap-3">
    <CurrencyExchangeCard base />

    <Icon
      :icon="`mdi:arrow-${windowWidth < 768 ? 'down' : 'right'}-thin`"
      width="30"
      :class="{ 'w-100': windowWidth < 768 }"
    />

    <CurrencyExchangeCard />
  </div>
</template>
