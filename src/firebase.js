// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjq5v3LhsaG_XzbhGoq2Ijci1EZMcbhs",
  authDomain: "financely-mainn.firebaseapp.com",
  projectId: "financely-mainn",
  storageBucket: "financely-mainn.appspot.com",
  messagingSenderId: "451276980418",
  appId: "1:451276980418:web:f08299e45c5af9cf1cbb5b",
  measurementId: "G-G1S8FF3Z12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };