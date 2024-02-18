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
    <div
      v-else-if="dailyRatesError"
      class="flex-col flex-wrap justify-center space-y-5 my-4 text-center"
    >
      <p class="text-3xl">Ошибка</p>
      <button class="btn btn-ghost" @click="() => getDailyRates()">
        <Icon icon="mdi:reload" width="30" />
      </button>
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
