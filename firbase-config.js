// Your Firebase configuration object from Firebase console
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
