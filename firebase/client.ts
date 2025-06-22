import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFDgj_SKXOhAv5uHU1FUxhRLK2aZ9x04",
  authDomain: "preapareforeielts.firebaseapp.com",
  projectId: "preapareforeielts",
  storageBucket: "preapareforeielts.firebasestorage.app",
  messagingSenderId: "284836436128",
  appId: "1:284836436128:web:8790926082347df43751c5",
  measurementId: "G-LMHS8SC76N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);