import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSKBrcYaIh_SHBJNtP6xxwquqO17m6meQ",
  authDomain: "designncode-c3380.firebaseapp.com",
  projectId: "designncode-c3380",
  storageBucket: "designncode-c3380.firebasestorage.app",
  messagingSenderId: "212177461161",
  appId: "1:212177461161:web:6a6b676e0388197a1aeeb8",
  measurementId: "G-WKLGR8NSVM"
};

// Initialize Firebase (prevent multiple initializations in Next.js during hot-reloads)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, app };
