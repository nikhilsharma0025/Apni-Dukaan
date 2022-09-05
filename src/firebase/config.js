import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDm8sj7lXNARIBLvmBuGZAK3i1CcLrsA3U",
  authDomain: "rent-it-e25f2.firebaseapp.com",
  projectId: "rent-it-e25f2",
  storageBucket: "rent-it-e25f2.appspot.com",
  messagingSenderId: "404254981128",
  appId: "1:404254981128:web:4770b0b828cb41553ca5bd",
  measurementId: "G-Q3L89LBXL3"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const Firebase = firebase.initializeApp(firebaseConfig)//named export