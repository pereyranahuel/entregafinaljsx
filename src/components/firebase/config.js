import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLweq8yPyLZy5TNZeq7q644P72MqPa6g",
  authDomain: "rj-proyecto-final-nahuel.firebaseapp.com",
  projectId: "rj-proyecto-final-nahuel",
  storageBucket: "rj-proyecto-final-nahuel.appspot.com",
  messagingSenderId: "185234719951",
  appId: "1:185234719951:web:8e5bed345c58a1071b63ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()