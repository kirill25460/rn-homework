
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // import "firebase/storage";
// import { getStorage } from "firebase/storage";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCvWEIKHoibqdGOXQHBbVYLEYiWsRyPFMY",
  authDomain: "react-nativehw.firebaseapp.com",
  projectId: "react-nativehw",
  storageBucket: "react-nativehw.appspot.com",
  messagingSenderId: "795373762855",
  appId: "1:795373762855:web:9949a409b082fa3c649102",
  measurementId: "G-3GKL8437NW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export const storage = getStorage(app);
export const fsbase = getFirestore(app);