// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0YEHYmiCw7qs8i3Yl6JV6tvdtAjDUSII",
  authDomain: "mern-blog-c57f7.firebaseapp.com",
  projectId: "mern-blog-c57f7",
  storageBucket: "mern-blog-c57f7.appspot.com",
  messagingSenderId: "607143436118",
  appId: "1:607143436118:web:20e8af792274748a5840f7",
  measurementId: "G-RXLDPQL1WG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);