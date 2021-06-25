<template>
    <h2>Sign Up</h2>
    <hr>
    <br>
    <form @submit.prevent="signUp">
        <div v-if="error" class="error">{{error}}</div>
        <input type="text" placeholder="User Name" v-model="displayName">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignUp from '../composables/useSignup'

export default {
    setup(props,context){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let {error,createAccount} = useSignUp()
        let signUp = async()=>{
            let res = await createAccount(email.value,password.value,displayName.value);
            if  (res){
                context.emit("enterChatroom");
            }
        }

        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>
    
</style>