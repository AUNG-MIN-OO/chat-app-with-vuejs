import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAssWjzXR3tiJhomF0sbLFBz25t4Vcy7w0",
    authDomain: "vue-blog-system-8fed1.firebaseapp.com",
    projectId: "vue-blog-system-8fed1",
    storageBucket: "vue-blog-system-8fed1.appspot.com",
    messagingSenderId: "1011071254324",
    appId: "1:1011071254324:web:638bc8400b92872cf72f61"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp};

