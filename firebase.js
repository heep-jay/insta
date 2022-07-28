// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStrorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZC7umcb9IUTiwfd9nGyEXt8gh7-vQ8DY",
  authDomain: "hinsta-app.firebaseapp.com",
  projectId: "hinsta-app",
  storageBucket: "hinsta-app.appspot.com",
  messagingSenderId: "385272732864",
  appId: "1:385272732864:web:627275fb40861a65576125"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStrorage();

export {app, db, storage }