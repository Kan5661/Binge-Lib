<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        document.title = 'BingeLib';
    }
};
</script>

<style>
/* Component style goes here */
html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(242, 242, 242);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
