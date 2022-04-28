import { collection, getDocs, getFirestore } from "firebase/firestore";

export const db = getFirestore();

export const wishlistRef = collection(db, "wishlist");

export const quoteSnapShot = () => getDocs(wishlistRef);
