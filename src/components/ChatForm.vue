<template>
    <form @submit.prevent="">
        <!-- <textarea 
            placeholder="Type a message to send" autofocus
            v-model="message"
            @keypress.enter="handleSubmit"
        >
        </textarea> -->
        <input type="text" placeholder="Type a message to send" autofocus
            v-model="message"
            @keypress.enter="handleSubmit">
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
            console.log(chat);
            message.value="";
            console.log("message sent")
            console.log(error)
        }


        return { message,handleSubmit };
    }
}
</script>

<style scoped>
form {
    margin: 10px;
}
form input{
    margin-bottom: 7px;
    width: 98%;
    /* height: 40px; */
    padding: 20px 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    background-color: #e2d824;
    font-size: 16px;
}
</style>