<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">Login</button>
        <button @click="routeRegister">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/authStore';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'LoginPage',
    setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();
      const authStore = useAuthStore();
  
      const submitForm = async () => {
        try {
          await authStore.login({ username: username.value, password: password.value });
          router.push({ name: 'Home' });
        } catch (error) {
          console.error('Login failed:', error);
        }
      };

        const routeRegister = () => {
            router.push({ name: 'Register' });
        };
  
      return {
        username,
        password,
        submitForm,
        routeRegister,
      };
    },
  };
  </script>
  