import {useState, useEffect, useContext, createContext} from 'react';
import {db} from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';

const FirebaseContext = createContext([]);

const FirebaseProvider = ({children}) => {
  const [Data, setData] = useState();
  const categoriesRef = collection(db, 'categories');

  // Fetch Data from Firebase
  useEffect(() => {
    const ReadData = async () => {
      const data = await getDocs(categoriesRef);
      setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    ReadData();
  }, []);

  return <FirebaseContext.Provider value={{Data}}>{children}</FirebaseContext.Provider>;
};
export const useData = () => useContext(FirebaseContext);
export {FirebaseContext, FirebaseProvider};
