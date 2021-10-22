// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNM5gO_QM-iFP6pVEF_-7mFsYk5Po0p8",
  authDomain: "disney-clone-4829d.firebaseapp.com",
  projectId: "disney-clone-4829d",
  storageBucket: "disney-clone-4829d.appspot.com",
  messagingSenderId: "821551109791",
  appId: "1:821551109791:web:f27a81fdb1855df99c74aa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { db, auth, provider, storage };

