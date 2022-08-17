import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLNdw0Trxyk36fBxiGpJ3ppBzSyM3rOX4",
  authDomain: "playpenny-red.firebaseapp.com",
  projectId: "playpenny-red",
  storageBucket: "playpenny-red.appspot.com",
  messagingSenderId: "556172021209",
  appId: "1:556172021209:web:e3618af1fac6037aebddc8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
