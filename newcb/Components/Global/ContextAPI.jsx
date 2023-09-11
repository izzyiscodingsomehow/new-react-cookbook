import React, { createContext } from "react";
import { useState, useEffect,useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const UserContext = createContext([]);

const ContextProvider = ({ children }) => {
  const [Data, setData] = useState();
  const categoriesRef = collection(db, "categories");
  // Fetch Data from Firebase
  useEffect(() => {
    const ReadData = async () => {
      const data = await getDocs(categoriesRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    ReadData();
  }, []);
  
  // Store in Context API
  return (
    <UserContext.Provider value={{ Data }}>{children}</UserContext.Provider>
  );
};
export const useData = () => useContext(UserContext);
export { UserContext, ContextProvider };
