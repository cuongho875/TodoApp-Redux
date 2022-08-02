// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBUOONAILnZzG5l3TTgHXFXZcJgiCvhD0",
  authDomain: "todoapp-e5a9e.firebaseapp.com",
  projectId: "todoapp-e5a9e",
  storageBucket: "todoapp-e5a9e.appspot.com",
  messagingSenderId: "760683883750",
  appId: "1:760683883750:web:699511d548c5c060bc5f27",
  measurementId: "G-FZB4Y12Z46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {
db,
auth};