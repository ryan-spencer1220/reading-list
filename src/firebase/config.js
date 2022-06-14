import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4LhpA5tO8-DOL2HDuWmIdn-lBXehBG4A",
  authDomain: "reading-list-5493e.firebaseapp.com",
  projectId: "reading-list-5493e",
  storageBucket: "reading-list-5493e.appspot.com",
  messagingSenderId: "962581773061",
  appId: "1:962581773061:web:3115f2a6940e13983dd56c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

// Initialize Firebase Auth
const auth = getAuth();

export { db, auth };
