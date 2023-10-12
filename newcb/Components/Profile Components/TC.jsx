import { Image, ImageBackground, StyleSheet, Text, View,ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
import { termsandconditiontext } from "../../Texts/Texts.js";
import Markdown from 'react-native-markdown-display';
const color = "#E89452";

const TermsandCond = ({ navigation }) => {
  let bodyText = termsandconditiontext;
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
        <Text style={{ color: 'black', fontWeight: "bold", fontSize: 30 }}>
            Terms and Conditions
          </Text>
          <View>
            <Markdown style={styles.bodyText}>{bodyText}</Markdown>
          </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  // Button Properties
  button: {
    backgroundColor: "#ffffff",
    margin: 5,
    height: 60,
  },
});
export default TermsandCond;
