export const useSearchFiltersStore = defineStore('search-filters', () => {
  const searchQuery: Ref<string> = ref('')

  function $reset() {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    $reset
  }
})
