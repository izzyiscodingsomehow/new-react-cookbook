import { useState, useEffect, useContext, createContext } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { UserContext } from './ContextAPI';
import { useNetInfo } from "@react-native-community/netinfo";
const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const { type, isConnected } = useNetInfo();
  const [Data, setData] = useState();
  const categoriesRef = collection(db, 'categories');
  const [AsyncData, setAsyncData] = useState();
  const [LoggedIn, setLoggedIn] = useState(false);
  const [hasData, setHasData] = useState(false);
  // get data from firebase and map it to async state
  const ReadData = async () => {
    try {
      const data = await getDocs(categoriesRef);
      const receivedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAsyncData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      //await clearAll();

      await storeData(receivedData);
    } catch (error) {
      console.log(error);
    }
  };

  // store data in async storage
  const storeData = async (receivedData) => {
    try {
      const jsonValue = JSON.stringify(receivedData);
      await AsyncStorage.setItem('newdata', jsonValue);
      console.log('storedata');

      getData();
    } catch (error) {
      console.log('storedata Error: ', error, '\n');
    }
  };

  // AsyncStorage.removeItem('newdata')

  // get data from async storage
  const getData = async () => {
    try {
      if(!hasData){
        const jsonValue = await AsyncStorage.getItem('newdata');
        if (jsonValue != null ) {
          //console.log('if');
          const parsedvalue = JSON.parse(jsonValue);
          setData(parsedvalue);
          setHasData(true);
          //console.log('if end');
          // ReadData();
        }
        else {
          console.log('else');
          setHasData(false);
          if(isConnected){
            ReadData();
          }
        }
      }
    } catch (e) {
      // error reading value
    }
  }

  // TODO: maybe theres an error that when async data is removed on logout, the user needs to refresh or useEffect needs to run 
  //       again to fetch the data, need to check further more
  // bilal's code
  useEffect(() => {
    getData();
  }, [LoggedIn,isConnected,clearAll]);


  return <DataContext.Provider value={{ Data, LoggedIn, setLoggedIn,hasData }}>{children}</DataContext.Provider>;
};

export const clearAll = async () => {
  try {
    await AsyncStorage.removeItem('newdata');
    console.log("cleared async!");

  } catch (e) {
    // clear error
    console.log("did not clear async");
  }

  console.log('Done.')
}

export const useData = () => useContext(DataContext);
export { DataContext, DataProvider };
