

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDxk5ZrkbOu5EWPLGlf8CpMrUkeFeeC4DA",
  authDomain: "rn-homework-e6444.firebaseapp.com",
  projectId: "rn-homework-e6444",
  storageBucket: "rn-homework-e6444.appspot.com",
  messagingSenderId: "67328071045",
  appId: "1:67328071045:web:e1cddd8265567a0c7fa0ec",
  measurementId: "G-C2Y8M4EQXW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);