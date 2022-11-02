
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebase = process.env.REACT_APP_FIREBASE_APR_KEY
const firebaseConfig = {
  apiKey: firebase ,
  authDomain: "ecommerce-25c4a.firebaseapp.com",
  projectId: "ecommerce-25c4a",
  storageBucket: "ecommerce-25c4a.appspot.com",
  messagingSenderId: "915385730220",
  appId: "1:915385730220:web:1b6c34ee5d425474434b09",
  measurementId: "G-E78QMRMMGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;