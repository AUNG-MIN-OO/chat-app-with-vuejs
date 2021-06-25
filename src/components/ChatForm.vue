<template>
    <form>
        <textarea 
            cols="30" rows="10" placeholder="Type a message to send" autofocus
            v-model="message"
            @keypress.enter="handleSubmit"
        >

        </textarea>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import {timestamp} from '../firebase/config'

export default {
    setup(){
        let message = ref("");
        let {user} = getUser();
        let handleSubmit = ()=>{
            let chat ={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            console.log(chat);
            message.value="";
        }

        return { message,handleSubmit };
    }
}
</script>

<style>
form {
    margin: 10px;
}
form textarea{
    width: 98%;
    height: 20px;
    padding: 10px;
    border: none;
    border-radius: 0 0 20px 20px;
    outline: none;
    background-color: #faee1c;
    font-size: 16px;
}
</style>