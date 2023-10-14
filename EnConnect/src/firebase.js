import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrgVGVB43Dsv21n6oAC_P_hMStdQOlKbw",
  authDomain: "enconnect-864d6.firebaseapp.com",
  projectId: "enconnect-864d6",
  storageBucket: "enconnect-864d6.appspot.com",
  messagingSenderId: "1073111339720",
  appId: "1:1073111339720:web:c8037ab6dc08367b9c4bfd",
  measurementId: "G-N6T7YG70DX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {auth, db};