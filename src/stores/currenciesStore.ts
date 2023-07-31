export const useCurrenciesStore = defineStore('currencies', () => {
  const searchFiltersStore = useSearchFiltersStore()

  const currencies: Ref<{ [charCode: string]: CurrencyInfo } | null> = ref(null)

  async function getCurrencies() {
    await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((response) => response.json())
      .then((data: { Valute: { [key: string]: CurrencyInfo } }) => {
        const modifiedCurrenciesList: { [key: string]: CurrencyInfo } = {}

        for (const key in data.Valute) {
          const charCode = data.Valute[key].CharCode

          modifiedCurrenciesList[key] = {
            ...data.Valute[key],
            icon: `circle-flags:${charCode !== 'XDR' ? charCode.slice(0, 2).toLowerCase() : 'un'}`
          }
        }

        currencies.value = modifiedCurrenciesList
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getCurrencies()

  const filteredCurrencies = computed(() => {
    const currenciesList = ref(currencies.value)
    if (currenciesList.value !== null && searchFiltersStore.searchQuery) {
      currenciesList.value = Object.fromEntries(
        Object.entries(currenciesList.value).filter(
          ([, value]) =>
            value.Name.toLowerCase().includes(searchFiltersStore.searchQuery.toLowerCase()) ||
            value.CharCode.toLowerCase().includes(searchFiltersStore.searchQuery.toLowerCase())
        )
      )
    }
    return currenciesList.value
  })

  return {
    currencies,
    filteredCurrencies
  }
})

interface CurrencyInfo {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
  icon: string
}
