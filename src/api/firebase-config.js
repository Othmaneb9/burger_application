import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC4Rr7pwfw0LwCd35jrp_EtyrpNHG4xMpA",
  authDomain: "crazee-burger-projet-342f1.firebaseapp.com",
  projectId: "crazee-burger-projet-342f1",
  storageBucket: "crazee-burger-projet-342f1.appspot.com",
  messagingSenderId: "683011652189",
  appId: "1:683011652189:web:5b072e02e1b9828323abb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore() // pour se connecter à notre base de donnée