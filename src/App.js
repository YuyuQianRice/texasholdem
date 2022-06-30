import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Joingame from './components/Joingame';
import Holdemcard from './components/Holdemcard';
import Holdemtable from './components/Holdemtable';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged} from "firebase/auth";
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
const db = getDatabase(firebase_app)
const analytics = getAnalytics(firebase_app);


function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function App() {

  console.log();

  const [playerNameState, setPlayerNameState] = React.useState("Visitor");

  function updatePlayerName(updateToMe) {
    setPlayerNameState(updateToMe);
  }

  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      // Signed in..

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
});

  return (
    <div className="container">
      <Header playerName={playerNameState} />
      <Joingame updatePlayerName={updatePlayerName}></Joingame>
      <Holdemtable></Holdemtable>
      
    </div>
  );
}

export default App;
