// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNZpa5TuPAHpsnXntbtWI7V62WqMntq8",
  authDomain: "genius-car-services-18c77.firebaseapp.com",
  projectId: "genius-car-services-18c77",
  storageBucket: "genius-car-services-18c77.appspot.com",
  messagingSenderId: "403666258008",
  appId: "1:403666258008:web:0db9cdbd2b53da4dd2622d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
