import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBCHTqB3DORVk2O2jPgTU7BxnrlCJz5__M",
    authDomain: "godavaritourism-bec1f.firebaseapp.com",
    projectId: "godavaritourism-bec1f",
    storageBucket: "godavaritourism-bec1f.firebasestorage.app",
    messagingSenderId: "550352672428",
    appId: "1:550352672428:web:5be4d7bba3a7699d07b109",
    measurementId: "G-L4NZ3MY80B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
