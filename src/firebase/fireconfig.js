// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYC7zWmdaMwMvTZO5-8pS0iuCcYqsJAG0",
  authDomain: "yerbamate-48a70.firebaseapp.com",
  projectId: "yerbamate-48a70",
  storageBucket: "yerbamate-48a70.appspot.com",
  messagingSenderId: "1018675608507",
  appId: "1:1018675608507:web:26d2a3e84af66438d8a29e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)