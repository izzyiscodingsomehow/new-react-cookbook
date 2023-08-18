
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button } from "native-base";
const color = "#E89452";

const Footer = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../imgs/home.jpg")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ color: color, fontWeight: "bold", fontSize: 15 }}>
            Home
          </Text>
        </Button>
        <Button style={styles.button}
        onPress={() => navigation.navigate("Search")}>
          <Image
            source={require("../imgs/search.jpg")}
            style={{ height: 40, width: 40, marginLeft: 5 }}
          />
          <Text style={{ color: color, fontWeight: "bold", fontSize: 15 }}>
            Search
          </Text>
        </Button>
        {/* <Button style={styles.button}
        onPress={() => navigation.navigate("Favorites")}>
          <Image
            source={require("../imgs/fav.jpg")}
            style={{ height: 40, width: 40, marginLeft: 12 }}
          />
          <Text style={{ color: color, fontWeight: "bold", fontSize: 15 }}>
            Favorites
          </Text>
        </Button> */}
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("ProfileNav")}
        >
          <Image
            source={require("../imgs/profile.jpg")}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              color: color,
              fontWeight: "bold",
              fontSize: 15,
              marginLeft: -3,
            }}
          >
            Profile
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
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
export default Footer;