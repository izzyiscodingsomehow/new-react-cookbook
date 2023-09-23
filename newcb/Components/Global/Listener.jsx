// import React, { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { onAuthStateChanged } from 'firebase/auth';

// function Listener() {

//   console.log("Called");

//   const [ Authuser, setAuthUser ] = useState();
//   const navigation = useNavigation();

//   useEffect(() => {

//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       if(user) {
//         //console.log(user);
//         setAuthUser(user);
//         navigation.navigate("HomeNav", {screen: 'Home'});
//       }
//       else {
//         //console.log(user);
//         setAuthUser(null);
//         navigation.navigate("Login");
//       }
//     })

//     return () => unsubscribe(); // unsubscribe on unmount
//   }, []);

// }

// export default Listener;