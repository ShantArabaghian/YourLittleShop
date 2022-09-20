import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDvTu0_P4jU-n2nbD6UDDePjbec8A7QiYk",
    authDomain: "senior-30ae4.firebaseapp.com",
    projectId: "senior-30ae4",
    storageBucket: "senior-30ae4.appspot.com",
    messagingSenderId: "175026964304",
    appId: "1:175026964304:web:5acd2e24a092061affce55",
    measurementId: "G-3MV1ERZY0J"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);