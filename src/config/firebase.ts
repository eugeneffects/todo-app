import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from "./firebaseConfig";

const Firebase = firebase.initializeApp(firebaseConfig)

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firebaseInstance = firebase
export const authService = firebase.auth()
export const dbService = firebase.firestore()
export const storageService = firebase.storage()

export default Firebase

