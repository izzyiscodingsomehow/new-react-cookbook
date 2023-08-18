import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
//import { auth, provider } from '../firebase';
//import { signInWithPopup } from "firebase/auth";
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
//import { useState } from "react";


const color = "#E89452";

const Login = ({ navigation }) => {

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <View>
              <Image
                source={require("../imgs/CookBookLogo.jpg")}
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
          <Button style={styles.ButtonProp} >
            <View style={styles.imagetext}>
              <Image
                source={require("../imgs/gmail.jpg")}
                style={{ height: 27, width: 20, marginRight: 15 }}
              />
              <Text style={{ color: "white",width:140, }}>Continue with Gmail</Text>
            </View>
          </Button>

          <Button style={styles.ButtonPropface}>
            <View style={styles.imagetext}>
              <Image
                source={require("../imgs/facebook.jpg")}
                style={{ height: 30, width: 17, marginRight: 5, marginTop: -2 }}
              />
              <Text style={{ color: "white",width:160 }}>Continue with Facebook</Text>
            </View>
          </Button>

          <Button style={styles.ButtonPropGuest} onPress={() => navigation.navigate('HomeNav')}>
            <View style={styles.imagetext}>
              <Image
                source={require("../imgs/guest.jpg")}
                style={{ height: 25, width: 26, marginRight: 15,marginLeft: 5 }}
              />
              <Text style={{ color: "black", fontWeight: "bold", width:160 }}>
                Continue as Guest
              </Text>
            </View>
          </Button>
          <View style={styles.Footer}>
            <Text style={{ fontWeight: "bold", marginRight: 5 }}>From</Text>
            <Image
              source={require("../imgs/undefinedlogo.jpg")}
              style={{ height: 20, width: 17 }}
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    border: 10,
  },
  // Background Image
  bgimage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
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
    color: "white",
    height: 550,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  // COOK BOOK HEADING
  mainHeading: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -25,
  },

  // Small description Text
  JustifyText: {
    borderColor: color,
    borderWidth: 2,
  },

  textColor: {
    color: "white",
    width: 270,
    fontWeight: "bold",
    textAlign: "center",
  },

  // SIGN UP Heading
  heading: {
    fontSize: 40,
    color: color,
    fontWeight: "bold",
  },

  // Gmail Button
  ButtonProp: {
    marginTop: 25,
    margin: 50,
    backgroundColor: "#D44C3D",
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  // Image Text
  imagetext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  // Facebook Button
  ButtonPropface: {
    backgroundColor: "#1877F2",
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: -25,
  },

  // Guest Button
  ButtonPropGuest: {
    backgroundColor: "white",
    marginBottom: -50,
    width: 201,
    borderRadius: 40,
    marginTop: 25,
  },

  // Footer Text
  Footer: {
    backgroundColor: "#615c5c5e",
    flexDirection: "row",
    marginTop: 100,
    marginBottom: -190,
  },
});
export default Login;