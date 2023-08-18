import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
import Footer from "../Footer.jsx";
const color = "#E89452";

const Profile = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <View style={styles.container}>
          <View style={styles.pagebuttons}>
            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("Suggestion Box")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/suggbox.jpg")}
                  style={{
                    height: 35,
                    width: 35,
                    marginRight: 5,
                    marginLeft: -2,
                  }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
                >
                  Suggestion Box
                </Text>
              </View>
            </Button>

            <Button
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
            </Button>

            <Button
              style={styles.pagebutton}
              onPress={() => navigation.navigate("About")}
            >
              <View style={styles.imagetext}>
                <Image
                  source={require("../../imgs/about.jpg")}
                  style={{ height: 35, width: 35, marginRight: 5 }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
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
                  style={{ height: 35, width: 33, marginRight: 5 }}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
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
                  style={{ height: 35, width: 35, marginRight: 5 }}
                  source={require("../../imgs/PrivacyPolicy.jpg")}
                />
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
                >
                  Privacy Policy
                </Text>
              </View>
            </Button>
          </View>
        </View>
        <View style={styles.footer}>
        <Footer navigation={navigation}/>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  // Container
  container: {
    marginBottom: 310,
    padding: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // Page Buttons
  pagebuttons: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginLeft: -35,
    padding: 10,
    marginTop: 250,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  // Page Button Properties
  pagebutton: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  // Background Image
  bgimage: {
    flex: 1,
    justifyContent: "center",
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
