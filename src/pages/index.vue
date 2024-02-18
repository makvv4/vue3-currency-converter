<script setup lang="ts">
const { filteredCurrencies, dailyRatesIsFetching, dailyRatesError } =
  storeToRefs(useCurrenciesStore())

const { getDailyRates } = useCurrenciesStore()
</script>

<template>
  <main>
    <div v-if="dailyRatesIsFetching" class="flex flex-wrap justify-center gap-3 my-4">
      <Icon icon="svg-spinners:ring-resize" width="40" />
    </div>
    <div v-else-if="dailyRatesError" class="flex-col flex-wrap justify-center gap-3 my-4">
      <p>Ошибка</p>
      <button class="btn" @click="() => getDailyRates()"><Icon icon="mdi:reload" /></button>
    </div>
    <div
      v-else-if="filteredCurrencies && Object.keys(filteredCurrencies).length"
      class="flex flex-wrap justify-center gap-3 my-4"
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
    <div v-else class="p-4 text-5xl text-center">Валют не найдено</div>
  </main>
</template>
