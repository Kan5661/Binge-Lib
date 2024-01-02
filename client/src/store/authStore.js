// authStore.js
import { defineStore } from 'pinia';
import { loginUser } from '../api/api.auth';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('token') || null,
}),
  actions: {
    async login({ email, password }) {
        const res = await loginUser({ email, password });
        if (res.status == 200) {
            this.token = res.data.access_token;
            localStorage.setItem('token', this.token);
        } else {
            console.log(res)
            return res
        }

    },

    async logout() {
        this.token = null;
        localStorage.removeItem('token');
    },
},
});
