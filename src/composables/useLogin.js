import { ref } from "vue";
import { auth } from '../firebase/config'

let error = ref(null);

let signin = async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error ("Not match email or password!!");
        }
        return res;
    }catch(err){
        error.value = err.message;
        console.log(err.message);
    }
}

let userLogin = ()=>{
    return {error,signin}
}

export default userLogin;