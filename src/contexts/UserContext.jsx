{/*!SECTION revisar */}
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { createContext } from "react";


export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth,  (firebaseUser) => {
        console.log("Hello", {firebaseUser});
      if (firebaseUser ) {
        

        setUser({
            email: firebaseUser.email,
            name: firebaseUser.displayName,
        });
      } else {
        setUser(null);
      }

    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}