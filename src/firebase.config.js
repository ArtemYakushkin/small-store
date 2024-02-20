import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDporapEOAK-pB1DLD8EVZ-6tb1UDGcLDk",
  authDomain: "smallstore-1a9fc.firebaseapp.com",
  projectId: "smallstore-1a9fc",
  storageBucket: "smallstore-1a9fc.appspot.com",
  messagingSenderId: "891052574611",
  appId: "1:891052574611:web:8a665d63629d6b2734ca66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;