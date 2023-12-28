<template>
    <div class="RegisterPage">
        <h1>Create Account</h1>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder="Username">
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <input type="password" v-model="reEnterPassword" placeholder="Re-enter Password">
            <button type="submit">Register</button>
            <button @click="routeLogin">Login</button>
            <p>{{ accountCreationMessage }}</p>
        </form>
    </div>
</template>

<script>
import { registerUser } from '@/api/api.auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "RegisterPage",
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')
        const reEnterPassword = ref('')
        const accountCreationMessage = ref('')
        const router = useRouter()

        const submitForm = async () => {
            try {
                const res = await registerUser({
                    username: username.value,
                    email: email.value,
                    password: password.value,
                })

                if (res.status === 200) {
                    console.log("account created")
                    console.log(res)
                    accountCreationMessage.value = res.data.message
                }


            } catch (error) {
                console.error('Register failed:', error)
                accountCreationMessage.value = error.response.data.message
            }
        }

        const routeLogin = () => {
            router.push({ name: 'Login' })
        }

        return {
            username,
            email,
            password,
            reEnterPassword,
            submitForm,
            accountCreationMessage,
            routeLogin,
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
