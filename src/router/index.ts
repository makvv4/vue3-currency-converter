import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
})

router.beforeEach(() => useSearchFiltersStore().$reset())

export default router
