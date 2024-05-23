<template>
    <div class="main">
        <div class="SearchContainer">
            <div class="Filter">
                <input class="SearchBox" type="text" v-model="title" placeholder="Title" @keyup.enter="Search">
            </div>
        </div>

        <div class="SearchContent">
            stuff
        </div>
    </div>

</template>



<script>
import { ref } from 'vue';
import { fetchBooks } from '@/api/api.books';

export default {
    name: 'SearchBooks',
    components: {
    },
    setup() {
        const title = ref('');
        const SearchResult = ref({});

        const Search = async () => {
            console.log('Search');
            if (title.value.length === 0) {
                console.log('No title');
                return
            }
            try {
                const query = {
                    title: title.value
                }
                const response = await fetchBooks(query);
                console.log(response);
                SearchResult.value = response;
            } catch (error) {
                console.error('Search failed:', error);
            }
        };
        return {
            title, SearchResult, Search
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

.SearchContainer {
    display: flex;
    width: 100%;
}

.SearchContent {
    display: flex;
    width: 100%;
    flex-grow: 1;
}


.Filter {
    flex-grow: 1;
    margin: 20px 10px;
    display: flex;
    justify-content: center;
}

.SearchBox {
    width: 75%;
    height: 35px;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
}

.TitleTypeBox {
    display: flex;
}

</style>