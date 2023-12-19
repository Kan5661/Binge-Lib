<template>
    <div class="RegisterPage">
        <h1>Create Account</h1>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder="Username">
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <input type="password" v-model="reEnterPassword" placeholder="Re-enter Password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "RegisterPage",
    data() {
        return {
            username: '',
            password: '',
            email: '',
            reEnterPassword: ''
        }
    },
    methods: {
        submitForm() {
            axios.post('http://localhost:3001/register', {
                username: this.username,
                password: this.password,
                email: this.email,
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

<style scoped>
    .RegisterPage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin: 10px;
        padding: 10px;
        width: 300px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    /* create blue account button */
    button {
        margin: 10px;
        padding: 10px;
        width: 300px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background-color: #0069d9;
        scale: 1.01;
    }

</style>
