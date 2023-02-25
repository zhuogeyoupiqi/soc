import type { App } from 'vue'
import { createPinia, type Pinia } from 'pinia';

const store = createPinia()

export function setupStore(app:App<Element>) {
  app.use(store)
}

export { store };