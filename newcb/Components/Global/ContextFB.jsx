import { useState, useEffect, useContext, createContext } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const DataContext = createContext([]);

const DataProvider = ({ children }) => {

  let hasD = AsyncStorage.getItem('hasData');
  const [Data, setData] = useState();
  const categoriesRef = collection(db, 'categories');
  const [AsyncData, setAsyncData] = useState();
  const [hasData, setHasData] = useState(hasD);

  // get data from firebase and map it to async state
  const ReadData = async () => {
    try {
      const data = await getDocs(categoriesRef);
      setAsyncData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      await clearAll();
      await storeData();
    } catch (error) {
      console.log(error);
    }
  };

  // store data in async storage
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(AsyncData);
      await AsyncStorage.setItem('newdata', jsonValue);
      await AsyncStorage.setItem('hasData', "true");
      console.log('storedata');
      getData();
    } catch (error) {
      console.log('storedata Error: ', error, '\n');
    }
  };

  // get data from async storage
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('newdata');
      // const hasAsyncData = await AsyncStorage.getItem('hasData');
      // setHasData(hasAsyncData);
      if (jsonValue != null) {
        console.log('if');
        const parsedvalue = JSON.parse(jsonValue);
        setData(parsedvalue);
        console.log('else');
        // ReadData();
      }
      else {
        console.log('else');
        ReadData();
      }
    } catch (e) {
      // error reading value
    }
  }

  // TODO: maybe theres an error that when async data is removed on logout, the user needs to refresh or useEffect needs to run 
  //       again to fetch the data, need to check further more

  // bilal's code
  useEffect(() => {
    // console.log(hasData);
    // if (hasData == "false") {
    //   console.log("fetched data");
    //   ReadData();
    // }
    // else {
    getData();
    //}
  }, [])

  const clearAll = async () => {
    try {
      await AsyncStorage.removeItem('newdata')
    } catch (e) {
      // clear error
    }

    console.log('Done.')
  }

  return <DataContext.Provider value={{ Data }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
export { DataContext, DataProvider };
