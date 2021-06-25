<template>
    <form>
        <textarea 
            placeholder="Type a message to send" autofocus
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
import useCollection from '../composables/useCollection'

export default {
    setup(){
        let message = ref("");
        let {user} = getUser();
        let {error,addDoc} = useCollection("messages");
        let handleSubmit = async()=>{
            let chat ={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            await addDoc(chat);
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
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 0 0 20px 20px;
    outline: none;
    background-color: #faee1c;
    font-size: 16px;
}
</style>