import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Button} from 'native-base';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {useEffect, useContext, useState} from 'react';
import {UserContext} from './Global/ContextAPI';
import {DataContext} from './Global/ContextFB';
import {useNetInfo} from '@react-native-community/netinfo';
import RNRestart from 'react-native-restart';


import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
/* TO DO
1- Use Context API for object */
const color = '#E89452';

const Login = ({navigation}) => {
  // Check Internet Connection
  const {isConnected} = useNetInfo();
  // Context API
  const {user, setUser} = useContext(UserContext);
  const {LoggedIn, setLoggedIn} = useContext(DataContext);
  const {hasData} = useContext(DataContext);
  const [noConnLoad, setNoConnLoad] = useState(true);
  // Configure Google Sign In
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '637405091641-3o8c717lrj2q8qur2ji84f3hb5rh8i52.apps.googleusercontent.com',
      offlineAcess: true,
    });
    getCurrentUserInfo();
  }, []);
  useEffect(() => {
    if (user) {
      navigation.navigate('HomeNav');
      setLoggedIn(true);
    }
  }, [user]);
  // Send Data to Firebase
  // const sendDatatoFirebase = async (userInfo) => {
  //   const usersRef = collection(db, 'users');
  //   const docRef = await addDoc(usersRef, {
  //     name: userInfo.user.name,
  //     email: userInfo.user.email,
  //   });
  //   console.log('Document written with ID: ', docRef.id);
  // };
  // Get Current User Info
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      if (userInfo) {
        setUser(userInfo);
        //await sendDatatoFirebase(userInfo);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
  useEffect(() => {
      if (hasData && isConnected) {
      }
      else if (!hasData && isConnected===false) {
        Alert.alert(
          'No Internet!',
          'The app requires an internet connection to get data.', [
            {
              text: 'Reload App',
              onPress: () => RNRestart.restart(),
            },
          ]);
      }
  }, [hasData, isConnected]);
  // Sign In Function
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      // user cancelled the login flow
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Sign in cancelled.');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // play services not available or outdated
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // some other error happened
      } else {
        console.log(error);
      }
    }
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../imgs/mainBg.jpg')}
        resizeMode="cover"
        style={styles.bgimage}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <View>
              <Image
                source={require('../imgs/CookBookLogo.jpg')}
                style={styles.imageStyle}
              />
            </View>
            <Text style={styles.mainHeading}>COOK BOOK</Text>
            <View style={styles.JustifyText}>
              <Text style={styles.textColor}>
                "Delight your taste buds, one
              </Text>
              <Text style={styles.textColor}>recipe at a time !"</Text>
            </View>
          </View>
          <Text style={styles.heading}>Sign Up</Text>
          <Button style={styles.ButtonProp} onPress={() => signIn()}>
            <View style={styles.imagetext}>
              <Image
                source={require('../imgs/gmail.jpg')}
                style={{height: 23, width: 22, marginRight: 15}}
              />
              <Text style={{color: 'white', width: 140}}>
                Continue with Gmail
              </Text>
            </View>
          </Button>

          {/*
        <Button style={styles.ButtonPropface}>
          <View style={styles.imagetext}>
            <Image
              source={require("../imgs/facebook.jpg")}
              style={{ height: 30, width: 17, marginRight: 5, marginTop: -2 }}
            />
            <Text style={{ color: "white",width:160 }}>Continue with Facebook</Text>
          </View>
        </Button> */}

          <Button
            style={styles.ButtonPropGuest}
            onPress={() => {
              navigation.navigate('HomeNav');
              setLoggedIn(true);
            }}>
            <View style={styles.imagetext}>
              <Image
                source={require('../imgs/guest.jpg')}
                style={{height: 25, width: 26, marginRight: 15, marginLeft: 5}}
              />
              <Text style={{color: 'black', fontWeight: 'bold', width: 160}}>
                Continue as Guest
              </Text>
            </View>
          </Button>
          <View style={styles.Footer}>
            <Text style={{fontWeight: 'bold', marginRight: 5}}>From</Text>
            <Image
              source={require('../imgs/undefinedlogo.jpg')}
              style={{height: 20, width: 17}}
            />
          </View>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  // Main Container
  container: {
    marginBottom: 310,
    padding: 0,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    border: 10,
  },
  // Background Image
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 100,
  },
  // Logo Image
  imageStyle: {
    width: 150,
    height: 200,
    marginTop: 125,
    marginBottom: 40,
  },

  // Orange Container
  upperContainer: {
    backgroundColor: color,
    color: 'white',
    height: 550,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  // COOK BOOK HEADING
  mainHeading: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -25,
  },

  // Small description Text
  JustifyText: {
    borderColor: color,
    borderWidth: 2,
  },

  textColor: {
    color: 'white',
    width: 270,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // SIGN UP Heading
  heading: {
    fontSize: 40,
    color: color,
    fontWeight: 'bold',
  },

  // Gmail Button
  ButtonProp: {
    marginTop: 35,
    backgroundColor: '#D44C3D',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Image Text
  imagetext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Facebook Button
  ButtonPropface: {
    backgroundColor: '#1877F2',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: -25,
  },

  // Guest Button
  ButtonPropGuest: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: 201,
    borderRadius: 40,
    marginTop: 30,
  },

  // Footer Text
  Footer: {
    backgroundColor: '#7c7a7a29',
    flexDirection: 'row',
    marginTop: 90,
    marginBottom: -190,
  },
});
export default Login;
