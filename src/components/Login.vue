<template>
    <h2>Login</h2>
    <hr>
    <br>
    <form @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let email = ref("");
        let password = ref("");

        let login = ()=>{
            console.log(email.value,password.value)
        }

        return {email,password,login}
    }
}
</script>

<style>

</style>