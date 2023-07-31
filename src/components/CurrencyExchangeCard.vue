<script setup lang="ts">
defineProps<{
  base?: boolean
}>()
</script>

<template>
  <div class="d-flex align-items-center border rounded-3 p-3 ps-0 gap-3" style="width: 300px">
    <CurrencyDropdown :base="base" />

    <div>
      <input
        v-if="base"
        type="number"
        class="form-control"
        placeholder="Количество"
        v-model="useExchangeStore().base"
      />
      <input
        v-else
        type="number"
        class="form-control"
        placeholder="Количество"
        disabled
        :value="useExchangeStore().quoted"
      />
    </div>
  </div>
</template>
