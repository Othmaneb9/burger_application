import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase-config"
import { fakeMenu } from "../components/fakeData/fakeMenu"

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    await getDoc(docRef)
 }

export const createUser = (userId) => { 
    const docRef = doc(db, "users", userId)
    const nourriture = {
        username: userId,
        menu: fakeMenu.LARGE,
    }

    setDoc(docRef, nourriture)

 }