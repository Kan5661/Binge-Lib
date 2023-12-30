<template>
    <div class="RegisterPage">
        <h1>Create Account</h1>

        <div v-if="!showVerification">
            <form @submit.prevent="submitForm">
                <input type="text" v-model="username" placeholder="Username">
                <input type="text" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <input type="password" v-model="reEnterPassword" placeholder="Re-enter Password">
                <button type="submit">Register</button>
            </form>
        </div>

        <div v-if="showVerification">
            <h1>Verification Code sent to {{ email }}</h1>
            <form @submit.prevent="submit_verification_code">
                <input type="text" v-model="verificationCode" placeholder="Verification Code">
                <button type="submit">Submit Verification</button>
            </form>
        </div>

        <button @click="routeLogin">Back to Login</button>
        <p>{{ userNotiMsg }}</p>
    </div>
</template>

<script>
import { registerUser, account_verification } from '@/api/api.auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "RegisterPage",
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')
        const reEnterPassword = ref('')
        const userNotiMsg = ref('')
        const showVerification = ref(false)
        const verificationCode = ref('')
        const router = useRouter()


        const submitForm = async () => {
            if (password.value == reEnterPassword.value && password.value != '' && reEnterPassword.value != '' && email.value != '' && username.value != '') {
                try {
                    const res = await registerUser({
                        username: username.value,
                        email: email.value,
                        password: password.value,
                })

                    if (res.status === 200) {
                        console.log("verification code created")
                        console.log(res)
                        showVerification.value = true
                    }
                } 
                catch (error) {
                    console.error('Register failed:', error)
                    userNotiMsg.value = error.response.data.message
                }
            } else userNotiMsg.value = 'Please fill in all fields and make sure passwords match'
        }

        const submit_verification_code = async () => {
            try {
                const res = await account_verification({
                    email: email.value,
                    verification_code: verificationCode.value,
                })

                if (res.status === 200) {
                    console.log("account created")
                    console.log(res)
                    userNotiMsg.value = 'Account created! Please login'

                }
            } 
            catch (error) {
                console.error('account verification failed:', error)
                userNotiMsg.value = error.response.data.message
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
            userNotiMsg,
            routeLogin,
            showVerification,
            verificationCode,
            submit_verification_code,
        }
    }
}
</script>

<style scoped>
    .RegisterPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background: white;
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
