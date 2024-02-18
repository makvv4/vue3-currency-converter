<script setup lang="ts">
const props = defineProps<{
  base?: boolean
}>()

const { baseCurrencyValue, quotedCurrencyValue } = storeToRefs(useExchangeStore())
</script>

<template>
  <div class="flex items-center border rounded-3 p-3 ps-0 gap-3">
    <CurrencyDropdown :base="props.base" />

    <div>
      <input
        v-if="props.base"
        type="number"
        class="input input-bordered"
        placeholder="Количество"
        v-model="baseCurrencyValue"
      />
      <input
        v-else
        type="number"
        class="input input-bordered"
        placeholder="Количество"
        disabled
        :value="quotedCurrencyValue"
      />
    </div>
  </div>
</template>
