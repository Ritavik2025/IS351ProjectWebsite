// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBCy9zdhFHxQuFm9rEzLtyNiMQgyga75Jk",
  authDomain: "is351-project-59ef3.firebaseapp.com",
  projectId: "is351-project-59ef3",
  storageBucket: "is351-project-59ef3.firebasestorage.app",
  messagingSenderId: "423960114303",
  appId: "1:423960114303:web:f2e6c47c319ec6b40efb4a",
  measurementId: "G-R1FQ1MRCR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
