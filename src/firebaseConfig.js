// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbN0obA7oV6X1pM-Z3zsMZvmM141if2Wo",
  authDomain: "uutexasholdem.firebaseapp.com",
  databaseURL: "https://uutexasholdem-default-rtdb.firebaseio.com",
  projectId: "uutexasholdem",
  storageBucket: "uutexasholdem.appspot.com",
  messagingSenderId: "471236575268",
  appId: "1:471236575268:web:794a29e2a5a5155ca958b1",
  measurementId: "G-RRMM44GZ30"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app)
const analytics = getAnalytics(firebase_app);
