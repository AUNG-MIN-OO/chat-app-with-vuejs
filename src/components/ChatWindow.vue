<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <div v-if="user.displayName == message.name">
                    <div class="owner">
                        <span class="created-at">{{message.created_at}}</span>
                        <span class="message">{{message.message}}</span>
                        <span class="name">{{message.name}}</span>
                    </div>
                </div>
                <div v-else>
                    <span class="created-at">{{message.created_at}}</span>
                    <span class="name">{{message.name}}</span>
                    <span class="message">{{message.message}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {db} from '../firebase/config'
import { computed, onUpdated } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'
import {auth} from "../firebase/config"

export default {
    setup(props){
        let user = auth.currentUser;
        let messages = ref([]);
        let msgBox = ref(null);
        // auto scrolling feature
        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })

        let formattedMessages = computed(()=>{
            return messages.value.map((msg)=>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate());
                return {...msg,created_at:formatTime};
            })
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results = [];
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id:doc.id};
                // if  (doc.data().created_at){
                //     results.push(document);
                // }
                doc.data().created_at && results.push(document);
            })
            messages.value = results;
        })

        return {messages,formattedMessages,msgBox,user};
    }
}
</script>

<style>
    .chat-window {
        /* background: #cfc519; */
        padding: 30px 20px;
    }
    .single {
    margin: 18px 0;
    }
    .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
    }
    .name {
    font-weight: bold;
    margin-right: 6px;
    }
    .messages {
    max-height: 400px;
    overflow: auto;
    }
    .messages::-webkit-scrollbar{
        width: 0;
    }
    .message{
        padding: 3px 10px;
        border-radius: 10px 10px 10px 0;
        background-color: #ded30d;
        border: none;
    }
    .owner .message{
        padding: 3px 10px;
        border-radius: 10px 10px 0 10px;
        background-color: #ded30d;
        border: none;
        margin-right: 10px;
    }
    .owner{
        text-align: right;
    }
</style>