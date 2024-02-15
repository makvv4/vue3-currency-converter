<script setup lang="ts">
const props = defineProps<{
  base?: boolean
}>()

const { baseCurrencyValue, quotedCurrencyValue } = storeToRefs(useExchangeStore())
</script>

<template>
  <div class="d-flex align-items-center border rounded-3 p-3 ps-0 gap-3" style="width: 300px">
    <CurrencyDropdown :base="props.base" />

    <div>
      <input
        v-if="props.base"
        type="number"
        class="form-control"
        placeholder="Количество"
        v-model="baseCurrencyValue"
      />
      <input
        v-else
        type="number"
        class="form-control"
        placeholder="Количество"
        disabled
        :value="quotedCurrencyValue"
      />
    </div>
  </div>
</template>
