// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYglJ5lMuX39Nu5Y4KNEEUT5-XAL9yxIM",
  authDomain: "openaigpt24.firebaseapp.com",
  projectId: "openaigpt24",
  storageBucket: "openaigpt24.appspot.com",
  messagingSenderId: "355321626759",
  appId: "1:355321626759:web:05f61a490659b1985eb822",
  measurementId: "G-VLDW1M1D9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);