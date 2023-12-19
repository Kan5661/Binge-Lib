import { defineStore } from 'pinia';

export const useAuthTokenStore = defineStore('authToken', {
  // Define the initial state
  state: () => ({
    token: null,
  }),
  // Define actions to modify the state
  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  },
});
