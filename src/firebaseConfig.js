// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATo7jM3NUHPLJY-VtXlob5Z3xfNnTnk4Q",
  authDomain: "ajursinsight.firebaseapp.com",
  projectId: "ajursinsight",
  storageBucket: "ajursinsight.appspot.com",
  messagingSenderId: "14241130053",
  appId: "1:14241130053:web:a473e73f782a822b43252c",
  measurementId: "G-LH39P3NZ5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, signOut, db, collection, addDoc, query, where, getDocs, storage, ref, uploadBytes, getDownloadURL };
