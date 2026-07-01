import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuuPso6Hu72E64MZJESg4A0GhWYcAnxNU",
  authDomain: "erp-b73aa.firebaseapp.com",
  projectId: "erp-b73aa",
  storageBucket: "erp-b73aa.firebasestorage.app",
  messagingSenderId: "810393309677",
  appId: "1:810393309677:android:d8e5f4e58af989628c57e4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
