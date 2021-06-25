<template>
    <nav v-if="user">
        <div>
            <h2>Hi  <b>{{ user.displayName }}</b> !!!</h2>
            <p class="email">logged in as <b>{{ user.email }}</b></p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import userSignOut from '../composables/logOut'
import getUser from "../composables/getUser"
export default {
    setup(){
        let {error,userlogOut} = userSignOut()
        let logout = async()=>{
            await userlogOut();
        }

        let {user} = getUser();

        

        return {logout,error,user}
    }
}
</script>

<style>
h2{
    margin-bottom: 0;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
}
nav p {
    margin: 0;
    font-size: 20px;
}
nav p.email{
    color: #581b9890;
    margin-top: 0px;
    font-size: 15px;
}
nav button{
    cursor: pointer;
}
</style>