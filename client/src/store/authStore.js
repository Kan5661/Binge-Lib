// authStore.js
import { defineStore } from 'pinia';
import { loginUser } from '../api/api.auth';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
}),
  actions: {
    async login({ email, password }) {
        const res = await loginUser({ email, password });
        if (res.status == 200) {
            this.token = res.data.access_token;
            this.isAuthenticated = true;
            localStorage.setItem('token', this.token);
        } else {
            console.log(res)
            return res
        }

    },

    async logout() {
        this.token = null;
        this.isAuthenticated = false;

        // Remove the token from localStorage
        localStorage.removeItem('token');
    },
},
});
