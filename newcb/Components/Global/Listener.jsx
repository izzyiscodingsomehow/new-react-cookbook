// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';

// function Listener() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();
//   const navigation = useNavigation();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     console.log("User is" + user);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if(user) {
//     navigation.navigate("HomeNav", {screen: "Home"});
//   }

//   if (initializing) return null;

//   if (!user) {
//     setUser(null);
//     navigation.navigate("Login");
//   }

// }

// export default Listener;

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

function Listener() {

  console.log("Called");

  const [ Authuser, setAuthUser ] = useState();
  const navigation = useNavigation();

  useEffect(() => {

    const unsubscribe = auth().onAuthStateChanged((user) => {
      if(user) {
        //console.log(user);
        setAuthUser(user);
        navigation.navigate("HomeNav", {screen: 'Home'});
      }
      else {
        //console.log(user);
        setAuthUser(null);
        navigation.navigate("Login");
      }
    })

    return () => unsubscribe(); // unsubscribe on unmount
  }, []);

}

export default Listener;