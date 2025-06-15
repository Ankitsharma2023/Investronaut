
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD2_hFl_aX9UTbESRAAECWY7UeZ0F7W_i4",
  authDomain: "investronaut-eea6b.firebaseapp.com",
  projectId: "investronaut-eea6b",
  storageBucket: "investronaut-eea6b.firebasestorage.app",
  messagingSenderId: "632905754933",
  appId: "1:632905754933:web:5aca5d7ade8ceb60a1047c",
  measurementId: "G-HX4M2DTT36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth};