import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY="AIzaSyCbqV1vlaFjGNtZqZ_JDqhnN9MJsH4iZyk"
VITE_FIREBASE_AUTH_DOMAIN="wp-boostup.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="wp-boostup"
VITE_FIREBASE_STORAGE_BUCKET="wp-boostup.firebasestorage.app"
VITE_FIREBASE_MESSAGING_SENDER_ID="818223285244"
VITE_FIREBASE_APP_ID="1:818223285244:web:412cf84c83dae1c152a879"
VITE_FIREBASE_MEASUREMENT_ID="G-MPZRSMB92J"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
