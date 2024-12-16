import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsjhjhzkN-tOxfiSwhL7F2lq2jblfd2B8",
  authDomain: "testant-faa77.firebaseapp.com",
  projectId: "testant-faa77",
  storageBucket: "testant-faa77.firebasestorage.app",
  messagingSenderId: "284750867828",
  appId: "1:284750867828:web:902e1075324bdb31889021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);