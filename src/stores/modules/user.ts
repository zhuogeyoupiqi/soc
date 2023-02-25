import { defineStore } from 'pinia'

interface UserState {
  token?: string,
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: ():UserState => ({
    // token
    token: undefined,
  }),
  getters: {
    getToken(): string {
      return this.token || '小行';
    },
  },
  actions: {
  }

})