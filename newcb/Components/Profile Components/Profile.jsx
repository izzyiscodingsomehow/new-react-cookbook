import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
import Footer from "../Footer.jsx";
import auth from '../../firebase';
import { signOut } from "firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UserContext } from '../Global/ContextAPI';
import { useContext } from "react";
import ProfileHeader, {Profileheader} from './ProfileHeader.jsx';
const color = "#E89452";

const Profile = ({ navigation }) => {
  
  const { user, setUser } = useContext(UserContext);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      //setState({ user: null }); // Remember to remove the user from your app's state as well
      setUser(null);
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <View style={styles.container}>
          <View style={{backgroundColor:"#ffffff0"}}>
            <ProfileHeader/>
          </View>
          <View style={styles.pagebuttons}>
            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("Suggestion Box")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/suggbox.jpg")}
                  style={{
                    height: 40,
                    width: 40,
                    marginRight: 10,
                    marginLeft: -2,
                  }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 23 }}
                >
                  Suggestion Box
                </Text>
              </View>
            </Button>

            {/* <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("How To Use")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/help.jpg")}
                  style={{ height: 32, width: 32, marginRight: 8 }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
                >
                  Help
                </Text>
              </View>
            </Button> */}

            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("About")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/about.jpg")}
                  style={{ height: 40, width: 40, marginRight: 10 }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 23 }}
                >
                  About
                </Text>
              </View>
            </Button>
            {/* Terms and con button */}
            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("Terms and Conditions")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/termncon.jpg")}
                  style={{ height: 40, width: 37, marginRight: 10 }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 23 }}
                >
                  Terms & Conditions
                </Text>
              </View>
            </Button>

            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("Privacy Policy")}
            >
              <View style={styles.imagetext}>
                <Image
                  style={{ height: 40, width: 40, marginRight: 10 }}
                  source={require("../../imgs/PrivacyPolicy.jpg")}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 23 }}
                >
                  Privacy Policy
                </Text>
              </View>
            </Button>

            <Button style={styles.pagebutton} onPress={signOut}>
              <View style={styles.imagetext}>
                <Image
                  style={{ height: 40, width: 40, marginRight: 10 }}
                  source={require("../../imgs/logout.jpg")}
                />
                <Text style={{ color: 'black',fontWeight: "bold", fontSize: 23 }}>Sign Out</Text>
              </View>
            </Button>

          </View>
        </View>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  // Container
  container: {
    paddingLeft: 15,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  // Page Buttons
  pagebuttons: {
    borderColor: 'black',
    marginTop: 30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  // Page Button Properties
  pagebutton: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    paddingHorizontal: 'auto'
  },
  // Background Image
  bgimage: {
    flex: 1,
  },
  // ImageText
  imagetext: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    backgroundColor: "#ffffff",
  },
  // Button Properties
  button: {
    backgroundColor: "#ffffff",
    margin: 5,
    height: 60,
  },
});
export default Profile;