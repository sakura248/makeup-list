import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

const UseAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uid, setUid] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return {
    loggedIn,
    uid,
  };
};

export default UseAuthStatus;
