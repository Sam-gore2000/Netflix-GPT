// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdREB82jHc9AWXdCLGf1vi0jOM21aeli8",
  authDomain: "netflix-gpt-c0253.firebaseapp.com",
  projectId: "netflix-gpt-c0253",
  storageBucket: "netflix-gpt-c0253.appspot.com",
  messagingSenderId: "122685554795",
  appId: "1:122685554795:web:51173bf87ba19f11d8312e",
  measurementId: "G-DNYEGR83EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);