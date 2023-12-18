<template>
    <div>
        <h1>Home</h1>
        <p>Home page body content</p>
        <h2>Message from API: {{ message }}</h2>

    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchData } from '@/api/test.js'

export default {
    name: 'HomePage',
    setup() {
        const message = ref(''); // Declare reactive variable

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
        };
    },
};
</script>

<style scoped>
/* Your component-specific styles */
</style>


