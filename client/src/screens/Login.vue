<template>
    <div class="login-container">
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
  

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}


.login-container form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.login-container form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-container form button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin: 5px
}

.login-container form button:hover {
  background-color: #0066d2;
}
</style>