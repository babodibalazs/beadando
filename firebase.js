import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdjhpem59O-nl0s8X3ht7hFtIZikvLf4s",
  authDomain: "mobilhazi25.firebaseapp.com",
  projectId: "mobilhazi25",
  storageBucket: "mobilhazi25.firebasestorage.app",
  messagingSenderId: "706459284307",
  appId: "1:706459284307:web:3f4e970b1a21324ad2e7a6",
  measurementId: "G-FW26DGCSPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);