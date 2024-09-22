// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOG_WW_Xf4Y4sar1kYI1SYP7dAvuFhgac",
  authDomain: "stream-sphere-b7391.firebaseapp.com",
  projectId: "stream-sphere-b7391",
  storageBucket: "stream-sphere-b7391.appspot.com",
  messagingSenderId: "42682418731",
  appId: "1:42682418731:web:440c5f547addd110040c6e",
  measurementId: "G-QDF8F45K84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);