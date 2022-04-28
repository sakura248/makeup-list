import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firestore";
import UseAuthStatus from "./UseAuthStatus";

function UseWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [gotList, setGotList] = useState([]);
  const { uid } = UseAuthStatus();
  console.log(uid);
  const fetchWishlist = useCallback(async () => {
    const wishQuery = query(
      collection(db, "wishlist"),
      where("haveThis", "==", false),
      where("id_user", "==", uid)
    );
    const haveQuery = query(
      collection(db, "wishlist"),
      where("haveThis", "==", true),
      where("id_user", "==", uid)
    );
    await onSnapshot(wishQuery, (document) => {
      setWishlist(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
    await onSnapshot(haveQuery, (document) => {
      setGotList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  }, [uid]);
  return { fetchWishlist, wishlist, gotList };
}

export default UseWishlist;
