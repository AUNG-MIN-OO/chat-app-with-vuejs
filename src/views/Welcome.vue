<template>
    <h1>Welcome From Future Chat App!</h1>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login @enterChatroom="enterChatroom"></Login>
            <p>Not a member? <span @click="showLoginForm=!showLoginForm">Create account?</span></p>
        </div>
        <div v-else>
            <Singup @enterChatroom = "enterChatroom"></Singup>
            <p>Already a member? <span @click="showLoginForm=!showLoginForm">Login account?</span></p>
        </div>
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import Singup from '../components/Singup'
import {useRouter} from 'vue-router'
export default {
  components: {
    Login, Singup 
    },
    setup(){
        let showLoginForm = ref(true);
        let router = useRouter();
        let enterChatroom = ()=>{
            router.push({name:"Chatroom"})
        }
        return {showLoginForm,enterChatroom}
    }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
.welcome hr{
    width: 50%;
}
h1{
    text-align: center;
    text-transform: uppercase;
    margin: 30px auto;
}
.welcome h2{
    margin: 0;
}
.welcome form{
    width: 400px;
    margin: 20px auto;
}
.welcome form label{
    display: block;
    margin: 20px;
}
.welcome input{
    display: block;
    padding: 10px 0;
    width: 100%;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #9c1de7;
    border-radius: 5px;
    color: #581b98;
    font-size: 16px;
    padding-left: 10px;
}
.welcome input:focus-visible{
    outline: none;
}
.welcome form button{
    width: 50%;
    cursor: pointer;
}
.welcome span{
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
}
</style>