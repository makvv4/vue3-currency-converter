<script setup lang="ts">
defineProps<{
  charCode: string
  value: number
  previous: number
  name: string
  icon: string
}>()
</script>

<template>
  <div class="border rounded-3 p-3 w-75">
    <div class="stat">
      <div class="stat-figure text-secondary">
        <Icon :icon="icon" width="32" />
      </div>
      <div class="stat-title">
        {{ charCode }}
        <span :class="[value > previous ? 'text-green' : 'text-red']">
          {{ value > previous ? '↗︎' : '↘︎' }}
        </span>
      </div>
      <div class="stat-value">{{ value }}</div>
      <div class="stat-desc text-wrap">{{ name }}</div>
    </div>
  </div>
</template>
