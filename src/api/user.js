import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase-config"
import { fakeMenu } from "../components/fakeData/fakeMenu"

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data();  // retourne les données de l'utilisateur si elles existent
      }
 }

export const createUser = (userId) => { 
    const docRef = doc(db, "users", userId)
    const nourriture = {
        username: userId,
        menu: fakeMenu.SMALL,
    }

    setDoc(docRef, nourriture)

 }

 export const authenticateUser = async (userId) => { 
    const existingUser = await getUser(userId);
    if (existingUser) {
    } else {
      await createUser(userId);
    }
  }