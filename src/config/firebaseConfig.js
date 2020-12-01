import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCg7hVRxHO1JM2dmjQ9tFE4R4I7zeHoPME",
    authDomain: "rcrminiproject.firebaseapp.com",
    databaseURL: "https://rcrminiproject.firebaseio.com",
    projectId: "rcrminiproject",
    storageBucket: "rcrminiproject.appspot.com",
    messagingSenderId: "636732846624",
    appId: "1:636732846624:web:ac0c07a71d43cc8e2f8245",
    measurementId: "G-LMB60RHMGQ"
  };


export const firebase_var =   firebase.initializeApp(firebaseConfig);
