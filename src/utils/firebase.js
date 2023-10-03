// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkfUgH0eDhUF0JyagWR3NsnMdu7VjLcSo",
  authDomain: "netflix-a3980.firebaseapp.com",
  projectId: "netflix-a3980",
  storageBucket: "netflix-a3980.appspot.com",
  messagingSenderId: "912193981490",
  appId: "1:912193981490:web:87bc04fcf899b61a83c02b",
  measurementId: "G-HHCGZEGJMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
