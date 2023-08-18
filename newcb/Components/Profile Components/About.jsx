import { Image, ImageBackground, StyleSheet, Text, View,ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
import Footer from "../Footer.jsx";
import { abouttext } from "../../assets/Texts/Texts.js";
const color = "#E89452";

const About = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.HeadingText}>
              About
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{abouttext}</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  // container
  container: {
    marginTop: 70,
    marginBottom: 310,
    alignItems: "center",
    justifyContent: "center",
  },
  // Heading Text
  HeadingText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 30,
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
  // Body Text
  bodyText: {
    marginTop: 30,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    color: "black",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
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
export default About;
