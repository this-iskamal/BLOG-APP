// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kamal-sblog.firebaseapp.com",
  projectId: "kamal-sblog",
  storageBucket: "kamal-sblog.appspot.com",
  messagingSenderId: "48254896431",
  appId: "1:48254896431:web:7d85f827ab29191219b9da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
