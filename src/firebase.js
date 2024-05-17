import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOvx14Ru2O6Oh2lAImQkCjIJwNkfdFgio",
  authDomain: "react-messenger-81f63.firebaseapp.com",
  projectId: "react-messenger-81f63",
  storageBucket: "react-messenger-81f63.appspot.com",
  messagingSenderId: "1075411934388",
  appId: "1:1075411934388:web:22047bdea85c450e8d0be1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
