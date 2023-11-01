import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { NativeBaseProvider, TextField, Container } from "native-base";
import Footer from "../Footer.jsx";
import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { DataContext } from "../Global/ContextFB";

const color = "#E89452";

const Search = ({ navigation, route }) => {
  const Data = useContext(DataContext);
  const [ser, setSer] = useState("");

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <ScrollView>
          <View style={styles.container}>
            {/*<Text>Want Something</Text>*/}
            <Image
              source={require("../../imgs/search.jpg")}
              style={{
                height: 20,
                width: 20,
                left: 300,
                // borderWidth: 20,
                marginBottom: 15,
                zIndex: 1,
                borderRadius: 100,
              }}
            />
            <TextField
              required
              w="85%"
              backgroundColor="transparent"
              color={color}
              placeholder={`Search recipe`}
              placeholderTextColor={color}
              onChangeText={(s) => setSer(s.toUpperCase())}
              value={ser}
              borderRadius="50"
              borderColor={color}
              fontSize={16}
              styles={styles.searchBox}
            />
            <View style={styles.ingredWrapper}>
              {ser ?
                Data.Data.filter((item) => item.RecipeName.toUpperCase().includes(ser)).map(
                  (e) => {
                    return (
                      <Container key={e.id} w="40" style={styles.IngredCont}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("SubCategoryNav", { screen: "Recipe", params: { name: e.RecipeName, id: e.id } })}>
                          {/* <Container>
                            <Image
                              source={{ uri: `${e.ImageLink}` }}
                              style={{ height: 90, width: 90, borderRadius: 50 }}
                            />
                          </Container> */}
                          <Container>
                            <Text style={styles.innerText}> {e.RecipeName} </Text>
                          </Container>
                        </TouchableOpacity>
                      </Container>
                    );
                  }
                ) : <View style={{ backgroundColor: color, borderRadius: 20, width: 100, position: "relative", left: 140 }}><Text style={{ color: 'white', textAlign: 'center', margin: 7, fontSize: 18, fontFamily: "LeagueSpartan-SemiBold" }}>Search</Text></View>

              }
            </View>
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
    marginTop: 20,
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
  // all fetched recipes come inside this wrapper
  ingredWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    justifyContent: "left",
    alignItems: "center",
    // borderWidth: 1
  },

  // Ingredient Container
  IngredCont: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    width: 350,
  },

  // Inner Text
  innerText: {
    textAlign: "left",
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 22,
    width: 350,
    color: '#AC6A36',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#F7DAC3",

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
export default Search;
