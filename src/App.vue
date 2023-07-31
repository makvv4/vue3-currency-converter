<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="sticky-top p-2 text-bg-dark">
    <nav class="container flex-wrap flex-lg-nowrap">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <RouterLink
          to="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <Icon icon="arcticons:priceconverter" width="40" color="wheat" />
        </RouterLink>
        <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0 me">
          <li><RouterLink to="/" class="nav-link px-2 text-white">Список валют</RouterLink></li>
          <li>
            <RouterLink to="/converter" class="nav-link px-2 text-white">Конвертер</RouterLink>
          </li>
        </ul>
        <form v-if="$route.path === '/'" class="my-3 my-lg-0 mx-lg-auto" role="search">
          <input
            type="search"
            class="form-control form-control-dark"
            v-model="useSearchFiltersStore().searchQuery"
            placeholder="Поиск валюты..."
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  </header>

  <RouterView class="container" />
</template>

<style scoped></style>
