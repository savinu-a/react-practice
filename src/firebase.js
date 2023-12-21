// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZn4i6lWHsh0Qh_Hp2MTkfrtNEOlOrtUY",
  authDomain: "test-project-01-408806.firebaseapp.com",
  projectId: "test-project-01-408806",
  storageBucket: "test-project-01-408806.appspot.com",
  messagingSenderId: "285545330190",
  appId: "1:285545330190:web:16f71d143c8c9dca096e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
