// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxNCSCJjwT4y2DNYk-kqEpC3Nz_OyADEE",
    authDomain: "cook-admin-86ba7.firebaseapp.com",
    databaseURL: "https://cook-admin-86ba7-default-rtdb.firebaseio.com/",
    projectId: "cook-admin-86ba7",
    storageBucket: "cook-admin-86ba7.appspot.com",
    messagingSenderId: "637405091641",
    appId: "1:637405091641:web:08b38cc4762b5724bb3ae8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
export const db = getFirestore(app);
//export const provider = new GoogleAuthProvider();


/* Initialize Firebase */
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

export async function signInWithGoogle(){
    const idToken = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

export default auth;
