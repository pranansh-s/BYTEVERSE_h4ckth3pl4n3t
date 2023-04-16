import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import  { getAuth, GoogleAuthProvider } from "firebase/auth";

const Config = {
    apiKey: "AIzaSyAmHbVSxd05ivD8nqWIX1sBKNIOXiHENlw",
    authDomain: "byteverse-vault.firebaseapp.com",
    projectId: "byteverse-vault",
    storageBucket: "byteverse-vault.appspot.com",
    messagingSenderId: "1000817495126",
    appId: "1:1000817495126:web:31a6839d006577269dbff7"
};

export const app = initializeApp(Config);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(auth);