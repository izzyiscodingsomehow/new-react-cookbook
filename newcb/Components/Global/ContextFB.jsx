import {useState, useEffect, useContext, createContext} from 'react';
import {db} from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const DataContext = createContext([]);

const DataProvider = ({children}) => {
  const [Data, setData] = useState();
  const categoriesRef = collection(db, 'categories');
  const [AsyncData, setAsyncData] = useState();
  const [hasData, setHasData] = useState(false);
  const ReadData = async () => {
    try {
      const data = await getDocs(categoriesRef);
      setAsyncData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(AsyncData)
    storeData();
  }
  , [AsyncData]);
  const storeData = async () => {
    try {
      if (AsyncData) {
        const jsonValue = JSON.stringify(AsyncData);
        await AsyncStorage.setItem('newdata', jsonValue);
      console.log('storedata');
      }
      getData();
    } catch (error) {
      console.log('storedata', error);
    }
  };
  // Fetch Data from Firebase
  useEffect(() => {
    getData();
    if(hasData){
    }
    else{ 
    ReadData();
    }
  }, [,setHasData]);
    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('newdata');
        const parsedvalue=JSON.parse(jsonValue);
        if(parsedvalue){
        setData(parsedvalue);
        setHasData(true);
        }
        //console.log(parsedvalue);
        return parsedvalue == null ? true : false;
        } catch (e) {
          // error reading value
        }
      }

  return <DataContext.Provider value={{Data}}>{children}</DataContext.Provider>;
};
export const useData = () => useContext(DataContext);
export {DataContext, DataProvider};
