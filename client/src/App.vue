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
html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
}



#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.FullPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
}

</style>
