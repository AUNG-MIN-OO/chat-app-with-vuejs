<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single">
                <span class="created-at">10:22 PM</span>
                <span class="name">AMO</span>
                <span class="message">Hi</span>
            </div>
            <div class="single">
                <span class="created-at">10:22 PM</span>
                <span class="name">AMO</span>
                <span class="message">I am AMO</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    .message{
        padding: 3px 10px;
        border-radius: 10px 10px 10px 0;
        background-color: #ded30d;
        border: none;
    }
</style>