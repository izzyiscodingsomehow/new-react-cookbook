// import { StatusBar } from "expo-status-bar";
// import {
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
// } from "react-native";
// import { Button, NativeBaseProvider } from "native-base";
// import Footer from "../Footer.jsx";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { UserContext } from "../Global/ContextAPI.jsx";
// import { useContext } from "react";
// import { useState } from "react";
// import { useCallback } from 'react';
// import {useFocusEffect } from '@react-navigation/native';
// const color = "#E89452";

// /*
// 1- Key will be the id of the recipe
// 2- Get the id of the recipe
// 3- Show Data
//  */

// let nextId = 1;
// const Favorites = ({ navigation }) => {

//   const Data = useContext(UserContext);
//   const [val, setVal] = useState([]);
//   const [check, SetCheck] = useState(false);
  
//   useFocusEffect(
//     useCallback(() => {
//       getData();
//       return () => {
//       };
//     }, [])
//   );
//   const getData = async () => {
    
//     Data.Data.map(async (e) => {
//     try {
//       const value = await AsyncStorage.getItem(e.id);
//       {
//         /* Show Data if Stored */
//       }
//       if (value != null) {
//        setVal(
//         [...val,{ name: value}]
//        );
//           SetCheck(true);
//       }
//     } catch (e) {
//       {
//         /* Else Empty Screen */
//         console.warn(e);
//       }
//     }
//   }
//   );
//     /*console.warn(Data.Data.id) -> Undefined*/

//     /* 1- Filter to get all the id of recipes
//        2- Check which ids are stored
//        3- Display */

//   };
//   return (
//     <NativeBaseProvider>
//       <ImageBackground
//         source={require("../../imgs/mainBg.jpg")}
//         resizeMode="cover"
//         style={styles.bgimage}
//       >
//         <ScrollView>
//         {/* <View style={styles.container}>
//         {check ? 
//         val.map((e) => {
//           console.log(e)
//         return (
//           <View style={{flexDirection:"column"}}>
//           <Text style={styles.HeadingText}>{e.name}</Text>
//             </View>
//         )})
//         : <Text> No Favourites Yet.</Text>  }
//         </View> */}
//         </ScrollView>
//         <View style={styles.footer}>
//           <Footer navigation={navigation} />
//         </View>
//       </ImageBackground>
//       <StatusBar style="auto" />
//     </NativeBaseProvider>
//   );
// };

// const styles = StyleSheet.create({
//   // container
//   container: {
//     marginTop: 70,
//     marginBottom: 310,
//     justifyContent: "center",
//     flexDirection: "column",
//     flexWrap: "wrap",
//   },
//   // Heading Text
//   HeadingText: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 30,
//     textAlign: "center",
//     paddingHorizontal: 30,
//     flexDirection: "column",
//   },
//   // Background Image
//   bgimage: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   // Footer
//   footer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     color: "white",
//     backgroundColor: "#ffffff0",
//   },
//   // Button Properties
//   button: {
//     alignItems: "center",
//     justifyContent: "space-around",
//     flexDirection: "row",
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//   },
//   // Favorite Recipe
//   favrec: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
// });

// export default Favorites;
