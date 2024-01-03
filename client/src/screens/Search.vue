<template>
    <div class="Homepage">
        <MenuTabs></MenuTabs>
    </div>
</template>



<script>
import MenuTabs from '@/components/MenuTabs.vue';
export default {
    name: 'SearchPage',
    components: {
        MenuTabs
    },
    setup() {
        return {
            MenuTabs
        }
    }
}
</script>



<style scoped>

</style>