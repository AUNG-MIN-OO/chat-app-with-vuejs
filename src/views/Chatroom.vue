<template>
    <!-- <h1>i am chatroom</h1> -->
    <div class="container">
        <Navbar></Navbar>
        <hr>
        <ChatWindow></ChatWindow>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'

export default {
  components: {
    ChatWindow,
    ChatForm, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push("/");
      }
    })
  }
}
</script>

<style scoped>
  hr{
    margin: 0 16px;
  }
</style>