// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsH1hnFjuu_Hu7ctrdQz3XsbJJx02e4Lc",
  authDomain: "zercle-income-program-2022.firebaseapp.com",
  projectId: "zercle-income-program-2022",
  storageBucket: "zercle-income-program-2022.appspot.com",
  messagingSenderId: "538420350338",
  appId: "1:538420350338:web:e28f0e22f6bcbcdf38139b",
  measurementId: "G-LXWBMQTYWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);