// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkTgU72M_HMaqjzVcu8uIeAXhc1VAGMz8",
  authDomain: "dareup-718f0.firebaseapp.com",
  projectId: "dareup-718f0",
  storageBucket: "dareup-718f0.firebasestorage.app",
  messagingSenderId: "1083553323810",
  appId: "1:1083553323810:web:2eab5218d489140573e37b",
  measurementId: "G-17CZ7ZZ1RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
