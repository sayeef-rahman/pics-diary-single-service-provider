// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtAhYW_9MNJ9Kvq3wMgy1TzYPrBD1WIf4",
  authDomain: "pics-diary.firebaseapp.com",
  projectId: "pics-diary",
  storageBucket: "pics-diary.appspot.com",
  messagingSenderId: "152981352584",
  appId: "1:152981352584:web:80594a953e732c54f32f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;