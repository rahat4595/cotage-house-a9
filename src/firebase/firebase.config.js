// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbsv4X6gNk_cv_GjesWPPoyQTVNXjHjfc",
  authDomain: "cotage-house.firebaseapp.com",
  projectId: "cotage-house",
  storageBucket: "cotage-house.appspot.com",
  messagingSenderId: "804207290244",
  appId: "1:804207290244:web:8ffdc74eaa828322d45fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app