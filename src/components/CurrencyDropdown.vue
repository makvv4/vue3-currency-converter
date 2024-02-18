<script setup lang="ts">
const props = defineProps<{
  base?: boolean
}>()

const { currencies, filteredCurrencies } = storeToRefs(useCurrenciesStore())

const { searchQuery } = storeToRefs(useSearchFiltersStore())

const icon = computed(
  () => currencies.value?.[useExchangeStore()[props.base ? 'baseCharCode' : 'quotedCharCode']]?.icon
)

function select(charCode: string): void {
  useExchangeStore()[props.base ? 'baseCharCode' : 'quotedCharCode'] = charCode
  useSearchFiltersStore().$reset()
}
</script>

<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="flex items-center gap-2 ps-3 border-0 text-xl">
      <Icon :icon="icon" width="32" />
      {{ useExchangeStore()[props.base ? 'baseCharCode' : 'quotedCharCode'] }}
    </div>
    <div
      tabindex="0"
      class="dropdown-content z-[1] top-14 bg-black rounded-3 overflow-auto w-75"
      style="height: 50vh"
    >
      <form class="p-2 border-b border-dark">
        <input
          type="search"
          class="input w-full"
          v-model="searchQuery"
          placeholder="Поиск валюты..."
        />
      </form>
      <ul class="menu mb-0">
        <li
          v-for="currency in filteredCurrencies"
          :key="currency.ID"
          @click="select(currency.CharCode)"
        >
          <span class="py-2">
            <Icon :icon="currency.icon" width="32" />
            <span class="text-xl ms-3">{{ currency.CharCode }}</span>
            <span class="text-nowrap ms-3">{{ currency.Value }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
