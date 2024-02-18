import type { Currency } from 'models/Currency'

export const useCurrenciesStore = defineStore('currencies', () => {
  const { searchQuery } = storeToRefs(useSearchFiltersStore())

  const {
    data: dailyRates,
    execute: getDailyRates,
    isFetching: dailyRatesIsFetching,
    error: dailyRatesError
  } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/daily_json.js`)
    .get()
    .json()

  const currencies: Ref<{ [charCode: string]: Currency }> = ref({})

  watchEffect(() => {
    if (dailyRates.value?.Valute) {
      currencies.value = dailyRates.value.Valute

      for (const key in dailyRates.value.Valute) {
        const charCode = dailyRates.value.Valute[key].CharCode

        currencies.value[key].icon =
          `circle-flags:${charCode !== 'XDR' ? charCode.slice(0, 2).toLowerCase() : 'un'}`
      }

      return
    }

    currencies.value = {}
  })

  watchEffect(() => {
    console.log(dailyRatesIsFetching.value)
  })

  const filteredCurrencies = computed(() => {
    return Object.fromEntries(
      Object.entries(currencies.value).filter(
        ([, value]) =>
          value.Name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          value.CharCode.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    )
  })

  return {
    currencies,
    filteredCurrencies,
    dailyRatesIsFetching,
    dailyRatesError,

    getDailyRates
  }
})
