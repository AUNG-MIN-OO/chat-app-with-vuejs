<template>
    <h2>Login</h2>
    <hr>
    <br>
    <form @submit.prevent="login">
        <div v-if="error" class="error">{{error}}</div>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import userLogin from '../composables/useLogin'

export default {
    setup(){
        let email = ref("");
        let password = ref("");

        let {error,signin} = userLogin();

        let login = async()=>{
            let res = await signin(email.value,password.value);
            if(res){
                console.log(res.user)
            }
        }

        return {email,password,login,error}
    }
}
</script>

<style>

</style>