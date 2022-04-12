// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgd2D5dUvGNe5SQGYyufVAgjLUXz52Qfo",
    authDomain: "ema-john-simple-fbfa1.firebaseapp.com",
    projectId: "ema-john-simple-fbfa1",
    storageBucket: "ema-john-simple-fbfa1.appspot.com",
    messagingSenderId: "231604801199",
    appId: "1:231604801199:web:0b85c8c797056e2f594e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;