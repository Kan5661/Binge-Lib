<template>
    <div class="FullPage">
        <MenuTabs></MenuTabs>
        <SearchBooks></SearchBooks>
    </div>
</template>



<script>
import MenuTabs from '@/components/MenuTabs.vue';
import SearchBooks from '@/components/Search/SearchBooks.vue';
export default {
    name: 'SearchPage',
    components: {
        MenuTabs,
        SearchBooks
    },
    setup() {
        return {
            
            
        }
    }
}
</script>



<style scoped>
.main {
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    background-color: white;
}

</style>