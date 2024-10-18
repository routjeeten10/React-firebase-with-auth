import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD-Mn1MsepU0tDGFJd-5ZE5HZispa3X-xI",
  authDomain: "react-firebase-authentic-64180.firebaseapp.com",
  projectId: "react-firebase-authentic-64180",
  storageBucket: "react-firebase-authentic-64180.appspot.com",
  messagingSenderId: "449787193327",
  appId: "1:449787193327:web:b47e15c25110e61ac9b81a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)