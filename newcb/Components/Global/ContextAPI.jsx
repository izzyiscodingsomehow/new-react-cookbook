import React, { createContext } from "react";
import { useState, useEffect,useContext } from "react";

const UserContext = createContext([]);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);
  
  // Store in Context API
  return (
    <UserContext.Provider value={{ user, setUser, LoggedIn, setLoggedIn }}>{children}</UserContext.Provider>
  );
};
export const useData = () => useContext(UserContext);
export { UserContext, ContextProvider };
