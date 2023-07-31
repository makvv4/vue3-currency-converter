<script setup lang="ts">
const props = defineProps<{
  base?: boolean
}>()

import { Icon } from '@iconify/vue'

const { currencies, filteredCurrencies } = storeToRefs(useCurrenciesStore())

function select(charCode: string): void {
  useExchangeStore()[props.base ? 'baseCharCode' : 'quotedCharCode'] = charCode
  useSearchFiltersStore().$reset()
}
</script>

<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle ps-3 border-0"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-offset="0,20"
    >
      <Icon
        :icon="
          currencies
            ? currencies[useExchangeStore()[base ? 'baseCharCode' : 'quotedCharCode']].icon
            : ''
        "
        width="32"
      />
      {{ useExchangeStore()[base ? 'baseCharCode' : 'quotedCharCode'] }}
    </button>
    <div
      class="dropdown-menu border-0 pt-0 mx-0 rounded-3 shadow overflow-auto"
      data-bs-theme="dark"
      style="width: 300px; height: 50vh"
    >
      <form class="p-2 mb-2 bg-dark border-bottom border-dark">
        <input
          type="search"
          class="form-control bg-dark"
          v-model="useSearchFiltersStore().searchQuery"
          autocomplete="false"
          placeholder="Type to filter..."
        />
      </form>
      <ul class="list-unstyled mb-0">
        <li
          v-for="currency in filteredCurrencies"
          :key="currency.ID"
          @click="select(currency.CharCode)"
        >
          <span class="dropdown-item d-flex align-items-center gap-2 py-2">
            <Icon :icon="currency.icon" width="32" />
            <span class="fs-4 ms-3">{{ currency.CharCode }}</span>
            <span class="text-nowrap ms-3">{{ currency.Value }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
