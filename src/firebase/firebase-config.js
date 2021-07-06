import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoPKikqGYb-G4K2rwHO4QlmJ0j8WY3OS4",
    authDomain: "react-journal-app-c0211.firebaseapp.com",
    projectId: "react-journal-app-c0211",
    storageBucket: "react-journal-app-c0211.appspot.com",
    messagingSenderId: "1028498700048",
    appId: "1:1028498700048:web:c3ccff77b4775f78e61795"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}