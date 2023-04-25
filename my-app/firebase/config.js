import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvWEIKHoibqdGOXQHBbVYLEYiWsRyPFMY",

  authDomain: "react-nativehw.firebaseapp.com",

  projectId: "react-nativehw",

  storageBucket: "react-nativehw.appspot.com",

  messagingSenderId: "795373762855",

  appId: "1:795373762855:web:9949a409b082fa3c649102",

  measurementId: "G-3GKL8437NW",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
