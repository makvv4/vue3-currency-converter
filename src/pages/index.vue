<script setup lang="ts">
const { filteredCurrencies } = storeToRefs(useCurrenciesStore())
</script>

<template>
  <main>
    <div>
      <div
        v-if="filteredCurrencies !== null && Object.keys(filteredCurrencies).length"
        class="gap-3 my-4 d-flex justify-content-center flex-wrap"
      >
        <CurrencyCard
          v-for="currency in filteredCurrencies"
          :key="currency.ID"
          :char-code="currency.CharCode"
          :value="currency.Value"
          :previous="currency.Previous"
          :name="currency.Name"
          :icon="currency.icon"
        />
      </div>
      <div v-else class="p-4 fs-3 text-center">Валют не найдено</div>
    </div>
  </main>
</template>
