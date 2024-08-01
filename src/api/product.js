import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => { 
    const cachette = doc(db, "users", userId)
    const nourriture = {
        username : userId,
        menu : menuUpdated,
    }
    setDoc(cachette, nourriture)
 }

 export const getMenu = async (userId) => {
    const docRef = doc(db, "users", userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        const {menu} = docSnap.data();  // retourne les données de l'utilisateur si elles existent
        return menu
    }
 }