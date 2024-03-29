/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1lRx0u7zA-1mYyCYnjzcjIxX39J5iEY",
  authDomain: "club-videojuegos.firebaseapp.com",
  projectId: "club-videojuegos",
  storageBucket: "club-videojuegos.appspot.com",
  messagingSenderId: "954622805500",
  appId: "1:954622805500:web:6e7c258dbdb6808c575e79",
  measurementId: "G-K3CSGSBMFY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //Conexion con autenticacion de firebase
export const db = getFirestore(app);
export const store = getStorage(app);
const analytics = getAnalytics(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});