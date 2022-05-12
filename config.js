import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyCqjQD64fXw-uPmeBMqcNyPuYoDRZv3DKY",
    authDomain: "p-70-933eb.firebaseapp.com",
    projectId: "p-70-933eb",
    storageBucket: "p-70-933eb.appspot.com",
    messagingSenderId: "126616718967",
    appId: "1:126616718967:web:7f91489c44104d8d17c072"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
