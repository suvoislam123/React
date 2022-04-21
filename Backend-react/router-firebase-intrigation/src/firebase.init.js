// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCd62UclEjjHV3mzCOZSX7EnU9YUkVZdM",
  authDomain: "react-router-intrigation.firebaseapp.com",
  projectId: "react-router-intrigation",
  storageBucket: "react-router-intrigation.appspot.com",
  messagingSenderId: "214136331875",
  appId: "1:214136331875:web:39abdc2cec7377fe942256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;