<template>
    <h2>Sign Up</h2>
    <hr>
    <br>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User Name" v-model="userName">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignUp from '../composables/useSignup'
export default {
    setup(){
        let userName = ref("");
        let email = ref("");
        let password = ref("");

        let {error,createAccount} = useSignUp()
        let signUp = async()=>{
            let res = await createAccount(email.value,password.value,userName.value);
            console.log(res.user)
        }

        return {userName,email,password,signUp}
    }
}
</script>

<style>
    
</style>