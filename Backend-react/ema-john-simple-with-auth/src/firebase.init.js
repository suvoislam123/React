import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD6iHadyIM4HnxVZSjvgXfT1e0JzX4mq0",
  authDomain: "emajhon-simple-479fd.firebaseapp.com",
  projectId: "emajhon-simple-479fd",
  storageBucket: "emajhon-simple-479fd.appspot.com",
  messagingSenderId: "1078062224106",
  appId: "1:1078062224106:web:6cc261359d645c017ffd93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
