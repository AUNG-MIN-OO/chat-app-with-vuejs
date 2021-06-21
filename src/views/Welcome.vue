<template>
    <div class="welcome container">
        <h1>Welcome From Future Chat App!</h1>
        <Singup></Singup>
        <Login></Login>
    </div>
    
</template>

<script>
import Login from '../components/Login'
import Singup from '../components/Singup'
export default {
  components: {
    Login, Singup },

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
h1{
    text-transform: uppercase;
}
.welcome form{
    width: 300px;
    margin: 20px auto;
}
.welcome form label{
    display: block;
    margin: 20px;
}
.welcome input{
    display: block;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #9c1de7;
    border-radius: 5px;
    color: #581b98;
}
.welcome input:focus-visible{
    outline: none;
}
.welcome form button{
    width: 50%;
    cursor: pointer;
}
</style>