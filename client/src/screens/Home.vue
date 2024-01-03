<template>
    <div class="HomePage">
        <MenuTabs></MenuTabs>
        <div class="MainContent">

        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';
import MenuTabs from '@/components/MenuTabs.vue';

export default {
    name: 'HomePage',
    components: {
        MenuTabs
    },
    setup() {
        const message = ref('');
        const authStore = useAuthStore();
        const router = useRouter();
        const logout = () => {
            authStore.logout();
            router.push({ name: 'Login' });
        };

        onMounted(async () => {

        });

        const IconRoute = () => {
            router.push({ name: 'Home' });
        };

        return {
            message,
            logout,
            IconRoute,
            MenuTabs
        };
    },
};
</script>

<style>
    .HomePage {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0; */
    }
</style>


