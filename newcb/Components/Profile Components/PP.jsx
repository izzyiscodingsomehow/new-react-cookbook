import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import { pptext } from "../../Texts/Texts.js";
import Markdown from 'react-native-markdown-display';
const color = "#E89452";

const PrivacyPolicy = ({ navigation }) => {
  let bodyText = pptext;
  bodyText=bodyText.replace(/\\n/g, '\n');
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={styles.HeadingText}
            >
              Privacy Policy For Undefined Technologies
            </Text>
            <Markdown style={styles.bodyText}>{bodyText}</Markdown>
          </View>
        </ScrollView>
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
  heading3: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },
  },
  // Button Properties
  button: {
    backgroundColor: "#ffffff",
    margin: 5,
    height: 60,
  },
});
export default PrivacyPolicy;
