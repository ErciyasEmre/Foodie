// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQubBwqptPcsG_nHdz-RUhV2qNqIlnHbA",
  authDomain: "foodie-c387d.firebaseapp.com",
  databaseURL: "https://foodie-c387d-default-rtdb.firebaseio.com",
  projectId: "foodie-c387d",
  storageBucket: "foodie-c387d.appspot.com",
  messagingSenderId: "292312183168",
  appId: "1:292312183168:web:35f547472ca23dca9a5165",
  measurementId: "G-6LEMQMPD6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);