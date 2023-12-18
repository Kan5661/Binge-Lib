<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            axios.post('http://localhost:3001/login', {
                username: this.username,
                password: this.password
            }).then((res) => {
                console.log(res);
                // this.$router.push('/');
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
