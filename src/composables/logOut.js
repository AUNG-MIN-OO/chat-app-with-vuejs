import { ref } from 'vue';
import { auth } from '../firebase/config'

let error = ref(null);
let userlogOut = async()=>{
    try{
        await auth.signOut();
        console.log('user logged out')
    }catch(err){
        error.value = err.message;
        console.log(error);
    }
}

let userSignOut = ()=>{
    return {error,userlogOut};
}

export default userSignOut;