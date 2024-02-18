<script setup lang="ts">
const { searchQuery } = storeToRefs(useSearchFiltersStore())

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="sticky top-0 p-2 bg-dark">
    <nav class="container mx-auto">
      <div class="navbar flex-wrap md:flex-nowrap justify-center gap-2">
        <div class="navbar-start">
          <RouterLink to="/" class="flex items-center mb-2 lg:mb-0 text-white">
            <Icon icon="arcticons:priceconverter" width="40" color="wheat" />
          </RouterLink>
          <ul class="flex flex-wrap col-12 lg:col-auto mb-2 justify-center md:mb-0 me">
            <li><RouterLink to="/" class="px-2 text-white">Список валют</RouterLink></li>
            <li>
              <RouterLink to="/converter" class="px-2 text-white">Конвертер</RouterLink>
            </li>
          </ul>
        </div>

        <div v-if="$route.path === '/'" class="navbar-center">
          <label class="input input-bordered flex items-center gap-2">
            <input
              type="search"
              class="grow bg-transparent"
              v-model="searchQuery"
              placeholder="Поиск валюты..."
            />

            <kbd class="kbd kbd-sm">⌘</kbd>
            <kbd class="kbd kbd-sm">K</kbd>
          </label>
        </div>

        <div class="navbar-end">
          <button @click="toggleDark()" class="text-gray-300 text-2xl">
            <!-- moon icon -->
            <Icon v-if="!isDark" icon="line-md:moon-filled-to-sunny-filled-transition" />

            <!-- sun icon -->
            <Icon v-else icon="line-md:sunny-filled-loop-to-moon-filled-transition" />
          </button>
        </div>
      </div>
    </nav>
  </header>

  <RouterView class="container mx-auto" />
</template>

<style scoped></style>
