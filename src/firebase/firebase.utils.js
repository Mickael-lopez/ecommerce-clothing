import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCi894yMqE9v3ccRSFbs7gtFqXKpwr7AIc",
    authDomain: "ecommerce-clothing-db-f0e46.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-db-f0e46.firebaseio.com",
    projectId: "ecommerce-clothing-db-f0e46",
    storageBucket: "ecommerce-clothing-db-f0e46.appspot.com",
    messagingSenderId: "808861414098",
    appId: "1:808861414098:web:7ad2e74758cc334f7c330b"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;