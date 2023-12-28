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
    async login({ username, password }) {
        try {
            const res = await loginUser({ username, password });
            if (res.status == 200) {
                this.token = res.data.access_token;
                this.isAuthenticated = true;

                // Store the token in localStorage
                localStorage.setItem('token', this.token);
            }
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
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
