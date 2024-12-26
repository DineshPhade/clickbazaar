
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDZlVmRzgqoZJJly9choVPVFvfj8wLe8KE",
  authDomain: "clickbazaar-533ed.firebaseapp.com",
  projectId: "clickbazaar-533ed",
  storageBucket: "clickbazaar-533ed.firebasestorage.app",
  messagingSenderId: "3139576925",
  appId: "1:3139576925:web:7a16c33c310f35ff61d9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth} ;