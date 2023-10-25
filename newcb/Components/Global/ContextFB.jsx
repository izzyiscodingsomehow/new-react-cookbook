import {useState, useEffect, useContext, createContext} from 'react';
import {db} from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext([]);

const DataProvider = ({children}) => {
  const [Data, setData] = useState();
  const categoriesRef = collection(db, 'categories');
  const [asyncData, setAsyncData] = useState();
  const ReadData = async () => {
    try {
      const data = await getDocs(categoriesRef);
      setAsyncData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      storeData();
    } catch (error) {
      console.log(error);
    }
  };
  const storeData = async () => {
    try {
      if (asyncData) {
        const jsonValue = JSON.stringify(asyncData);
        await AsyncStorage.setItem('data', jsonValue);
      }
    } catch (error) {
      console.log('storedata', error);
    }
  };
  // Fetch Data from Firebase
  useEffect(() => {
    if (!asyncData) {
      ReadData();
    }
  }, [asyncData]);
  useEffect(() => {
    const getData = async () => {
      if (asyncData) {
        try {
          const jsonValue = await AsyncStorage.getItem('data');
          console.log(jsonValue);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      }
      setData(getData());
    };
  }, [asyncData]);

  return <DataContext.Provider value={{Data}}>{children}</DataContext.Provider>;
};
export const useData = () => useContext(DataContext);
export {DataContext, DataProvider};
