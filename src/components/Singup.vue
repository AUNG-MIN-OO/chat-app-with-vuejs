<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User Name" v-model="userName">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config'
export default {
    setup(){
        let userName = ref("");
        let email = ref("");
        let password = ref("");
        let error   = ref(null);

        let signUp = async()=>{
            try{
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
                if(!res){
                    throw new Error("Coundn't create a new user")
                }
            }catch(err){
                error.value = err.message;
                console.log(error.value)
            }
        }

        return {userName,email,password,signUp,error}
    }
}
</script>

<style>

</style>