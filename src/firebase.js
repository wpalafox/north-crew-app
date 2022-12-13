// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_pVj5T5SDMcIUYrsaxwH_gx7YjRgBkE8",
  authDomain: "ependuro-adf88.firebaseapp.com",
  projectId: "ependuro-adf88",
  storageBucket: "ependuro-adf88.appspot.com",
  messagingSenderId: "220133297435",
  appId: "1:220133297435:web:012fb78e83329728ffd7be",
  measurementId: "G-5HP60GC3DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);