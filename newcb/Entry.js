import Login from "./Components/Login.jsx";
import React, {useState, useContext} from "react";
import Home from "./Components/Home.jsx";
import Search from "./Components/Main Pages/Search.jsx";
//import Favorites from "./Components/Main Pages/Favorites.jsx";
import TermsandCond from "./Components/Profile Components/TC.jsx";
import Help from "./Components/Profile Components/Help.jsx";
import PrivacyPolicy from "./Components/Profile Components/PP.jsx";
import Profile from "./Components/Profile Components/Profile.jsx";
import Recipe from "./Components/Main Pages/Recipe.jsx";
import SuggBox from "./Components/Profile Components/Suggestions.jsx";
import About from "./Components/Profile Components/About.jsx";
import SubCat from "./Components/Main Pages/SubCategory.jsx";
import AllCat from "./Components/Main Pages/AllCategory.jsx"
import Youtube from './Components/Global/YoutubePlayer.jsx';
import { Button, NativeBaseProvider } from "native-base";
import { Image } from "react-native";
import {
  UserContext,
  ContextProvider,
} from "./Components/Global/ContextAPI.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const color = "#E89452";
const Stack = createNativeStackNavigator();

function ProfileNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Suggestion Box" component={SuggBox} />
      <Stack.Screen name="Terms and Conditions" component={TermsandCond} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="How To Use" component={Help} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );

}
function HomeNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubCategoryNav"
        component={SubCategoryNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Search" component={Search} />

      {/* <Stack.Screen name="Favorites" component={Favorites} /> */}

      <Stack.Screen
        name="ProfileNav"
        component={ProfileNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SubCategoryNav() {
  const [path, setPath] = useState(require("./imgs/heart_w.jpg"));
  const IdContext = useContext([]);
  const Data = useContext(UserContext);
  let ID;  

  /* Store Data */
  // const storeData = async (localid,name) => {
  //   try {
  //     await AsyncStorage.setItem(localid, name);
  //   } catch (e) {
  //     // saving error
  //     console.warn(e);
  //   }
  // };

  /* Delete Data */
  // removeValue = async (localid) => {
  //   try {
  //     await AsyncStorage.removeItem(localid);
  //   } catch(e) {
  //     // remove error
  //     console.warn(e);
  //   }
  // }

  // const pathhandler = (name) => {
    
  //   if (path == (require("./imgs/heart_w.jpg"))) {
      
  //     setPath(require("./imgs/heart.jpg"));

  //       /* 1- Get the ID of the recipe
  //          2- Store the Recipe name */

  //     Data.Data.map((e) => {
  //       if( e.RecipeName == name) {
  //         ID = e.id;
  //       }
  //     })

  //     storeData(ID,name); // Function Calling

  //     alert("Added to Favorites");
  //   } else {
      
  //     setPath(require("./imgs/heart_w.jpg"));
      
  //     Data.Data.map((e) => {
  //       if( e.RecipeName == name) {
  //         ID = e.id;
  //       }
  //     })
      
  //     removeValue(ID); // Function Calling
  //     alert("Removed from Favorites");
  
  //   }
  // };
  return (
    <NativeBaseProvider>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="SubCategory"
        component={SubCat}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Recipe" component={Recipe} 
      options={ ({ route }) => ({ title: route.params.name , 
      // headerRight: () => (
      //   // onPress={() => {pathhandler(route.params.name)}}
      //   <Button style={{backgroundColor:color}} >  
      //     <Image
      //       source={path}
      //       style={{ width: 29, height: 26 }}
      //     />
      //   </Button>
      // ), 
      }) }/>
      <Stack.Screen name="Youtube"
       component={Youtube}
       options={({ route }) => ({ title: route.params.name })}  />
       <Stack.Screen name="AllCategory" component={AllCat} 
       options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
    </NativeBaseProvider>
  );
}

function MyStack() {
  return (
    <ContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeNav" component={HomeNav} />
        <Stack.Screen name="Login" component={Login} />
        

      </Stack.Navigator>
    </ContextProvider>
  );
}
const Entry = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default Entry;