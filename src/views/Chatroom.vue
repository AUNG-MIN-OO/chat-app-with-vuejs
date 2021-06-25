<template>
    <h1>i am chatroom</h1>
    <div class="container">
        <Navbar></Navbar>
        <hr>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'

export default {
  components: {
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

<style>
  hr{
    margin: 0 16px;
  }
</style>