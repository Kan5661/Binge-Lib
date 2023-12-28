<template>
    <div class="HomePage">
        <h1>Welcome to Binge Lib!</h1>
        <h2>Testing endpoint from flask server: {{ message }}</h2>
        <button @click="logout">Log out</button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchData } from '@/api/test.js'
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
    setup() {
        const message = ref('');
        const authStore = useAuthStore();
        const router = useRouter();
        const logout = () => {
            authStore.logout();
            router.push({ name: 'Login' });
        };

        onMounted(async () => {
            try {
                const data = await fetchData(); // Call the fetchData function
                message.value = data.message; // Assign fetched data to 'message' variable
            } catch (error) {
                console.error(error);
            }
        });

        return {
            message,
            logout,
        };
    },
};
</script>

<style scoped>
    .HomePage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>


