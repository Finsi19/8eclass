// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopD_nJx8qqf0vnrlMBl2pbToqb9V3xOo",
  authDomain: "esmpn19.firebaseapp.com",
  projectId: "esmpn19",
  storageBucket: "esmpn19.appspot.com",
  messagingSenderId: "10145197571",
  appId: "1:10145197571:web:44eb9093d0105dcae7e836",
  measurementId: "G-33RDVGMCPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();