import type { Currency } from 'models/Currency'

export const useCurrenciesStore = defineStore('currencies', () => {
  const { searchQuery } = storeToRefs(useSearchFiltersStore())

  const currencies: Ref<{ [charCode: string]: Currency }> = ref({})

  ;(async function () {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/daily_json.js`)
      const { Valute }: { Valute: { [key: string]: Currency } } = await response.json()
      currencies.value = Valute

      for (const key in Valute) {
        const charCode = Valute[key].CharCode

        currencies.value[key].icon =
          `circle-flags:${charCode !== 'XDR' ? charCode.slice(0, 2).toLowerCase() : 'un'}`
      }
    } catch (e) {
      console.log(e)
    }
  })()

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
    filteredCurrencies
  }
})
