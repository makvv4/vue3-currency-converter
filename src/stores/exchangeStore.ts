export const useExchangeStore = defineStore('exchange', () => {
  const { currencies } = storeToRefs(useCurrenciesStore())

  const baseCurrencyValue: Ref<number> = ref(1)

  const baseCharCode: Ref<string> = ref('EUR')
  const quotedCharCode: Ref<string> = ref('USD')

  const quotedCurrencyValue = computed(() => {
    try {
      return (
        ((currencies.value[baseCharCode.value].Value *
          currencies.value[baseCharCode.value].Nominal) /
          currencies.value[quotedCharCode.value].Value) *
        currencies.value[quotedCharCode.value].Nominal *
        baseCurrencyValue.value
      ).toFixed(2)
    } catch (e) {
      console.log(e)
      return 0
    }
  })

  function $reset() {
    baseCurrencyValue.value = 1
  }

  return {
    baseCurrencyValue,
    quotedCurrencyValue,
    baseCharCode,
    quotedCharCode,
    $reset
  }
})
