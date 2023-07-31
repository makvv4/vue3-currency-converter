export const useExchangeStore = defineStore('exchange', () => {
  const currenciesStore = useCurrenciesStore()

  const base: Ref<number> = ref(1)

  const baseCharCode: Ref<string> = ref('EUR')
  const quotedCharCode: Ref<string> = ref('USD')

  const quoted = computed(() => {
    if (currenciesStore.currencies) {
      return (
        ((currenciesStore.currencies[baseCharCode.value].Value *
          currenciesStore.currencies[baseCharCode.value].Nominal) /
          currenciesStore.currencies[quotedCharCode.value].Value) *
        currenciesStore.currencies[quotedCharCode.value].Nominal *
        base.value
      ).toFixed(2)
    }
    return 0
  })

  function $reset() {
    base.value = 1
  }

  return {
    base,
    quoted,
    baseCharCode,
    quotedCharCode,
    $reset
  }
})
