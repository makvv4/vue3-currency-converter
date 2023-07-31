<script setup lang="ts">
defineProps<{
  charCode: string
  value: number
  previous: number
  name: string
  icon: string
}>()

import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="list-group-item border rounded-3 p-3" style="width: 300px">
    <span class="d-flex align-items-center">
      <Icon :icon="icon" width="32" />
      <span class="fs-4 ms-3">{{ charCode }}</span>
      <div class="d-flex align-items-center ms-3">
        <span class="text-nowrap">{{ value }}</span>
        <Icon v-if="value > previous" icon="mdi:arrow-up-thin" color="green" width="24" />
        <Icon v-else icon="mdi:arrow-down-thin" color="red" width="24" />
      </div>
    </span>
    <p class="m-0 mt-2 text-secondary">{{ name }}</p>
  </div>
</template>
