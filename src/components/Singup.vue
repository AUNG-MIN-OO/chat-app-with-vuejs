<template>
    <h2>Signup form</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User Name" v-model="userName">
        <input type="text" placeholder="Email" v-model="email">
        <input type="text" placeholder="Password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let userName = ref("");
        let email = ref("");
        let password = ref("");

        let signUp = ()=>{
            console.log(userName.value,email.value,password.value)
        }

        return {userName,email,password,signUp}
    }
}
</script>

<style>

</style>