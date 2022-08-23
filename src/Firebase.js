// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4txc8bcwK-W96zLWO-LqpRSJ1fY89tVY",
  authDomain: "vue-elective-2022-wp.firebaseapp.com",
  projectId: "vue-elective-2022-wp",
  storageBucket: "vue-elective-2022-wp.appspot.com",
  messagingSenderId: "53391648926",
  appId: "1:53391648926:web:5f51babdd66a7b41b3f38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);