// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdVIMdAmKUAaIIcBVfiLaOZ45iIY0ea3k",
  authDomain: "diploma-29064.firebaseapp.com",
  projectId: "diploma-29064",
  storageBucket: "diploma-29064.appspot.com",
  messagingSenderId: "203898931533",
  appId: "1:203898931533:web:344e9823e29723e75bcf04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, 'categories');

export const productCollection = collection(db,'products' )