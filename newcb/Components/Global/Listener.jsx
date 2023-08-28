import React, { useState, useEffect } from 'react';
// import {auth} from '@react-native-firebase/auth';
import  auth  from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

function Listener() {

  const [Authuser, setAuthUser ] = useState();
  const navigation = useNavigation();

  /* Working */
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      /* If User Logged In */
      if(user) {
        setAuthUser(user);
        navigation.navigate('Home');
        Alert("Welcome" + Authuser.email);
      } else { /* If User Not Logged In */
        setUser(null);
        navigation.navigate('Login');
        console.log("Not Logged In");
      }
    });
    
    return () => subscriber(); // unsubscribe on unmount
  }, []);

}

export default Listener;