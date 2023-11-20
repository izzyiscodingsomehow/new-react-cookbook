import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Container, NativeBaseProvider, HStack, Center, TextField } from "native-base";
import { DataContext } from "../Global/ContextFB";
import Footer from "../Footer.jsx";
import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

const color = "#E89452";

const SubCat = ({ navigation, route }) => {
  
  let resultString = route.params.name.replace(/\s+/g, '');
  if (resultString === "Dessert") {
    resultString += 's';
  }
  navigation.setOptions({ title: resultString });
  const Data = useContext(DataContext);
  const [ser, setSer] = useState("");

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        {/* Main Screen */}
        <ScrollView>
          <View style={styles.searchField}>
            {/*<Text>Want Something</Text>*/}
            <TextField
              required
              w="85%"
              backgroundColor="transparent"
              color={color}
              placeholder={`Search recipe`}
              placeholderTextColor={color}
              onChangeText={(s) => setSer(s)}
              value={ser}
              borderRadius="50"
              borderColor={color}
              fontSize={21}
              styles={styles.searchBox}

            />
            <View style={styles.searchButtonwrapper}>
              {ser ?
                Data.Data.filter((item) => item.RecipeName.toLowerCase().includes(ser.toLowerCase)).map(
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
                ) : <></>

              }
            </View>
          </View>

          <HStack style={styles.container}>
            {Data.Data.filter((item) => item.Category == route.params.name).map(
              (e) => {
                return (
                  <Container key={e.id} w="40" style={styles.IngredCont}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Recipe", { name: e.RecipeName, id: e.id })
                      }
                    >
                      <Container style={{ width: 500, display: "flex", flexDirection: "row", alignItems: "center", gap: 10, }}>
                        {/* <Image
                          source={{ uri: `${e.ImageLink}` }}
                          style={{ height: 60, width: 60, borderRadius: 50, backgroundColor: "lightgray" }}
                        /> */}
                        <Text style={styles.innerText}> {e.RecipeName} </Text>
                      </Container>
                    </TouchableOpacity>
                  </Container>
                );
              }
            )}
          </HStack>
        </ScrollView>

        {/* Footer */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.footer}>
          <Footer navigation={navigation} />
        </KeyboardAvoidingView>

      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  // searchField
  searchField: {
    marginTop: 20,
    alignItems: "center",
  },
  //searchButtonwrapper
  searchButtonwrapper: {
    marginLeft: 80,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    justifyContent: "left",
    alignItems: "center",
    // borderWidth: 1
  },
  // container
  container: {
    marginTop: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",


  },
  recipeWrapper: {
    flex: 1,
    flexDirection: "row",

  },
  // Background Image
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },

  // Ingredient Container
  IngredCont: {
    display: "flex",
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#F7DAC3",
  },

  // Inner Text
  innerText: {
    color: '#AC6A36',
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 23,
    width: 300,
    // borderWidth: 1,
    // backgroundColor:"#F7DAC3",
    // paddingVertical: 5,
    // paddingHorizontal: 7,
    // borderRadius: 5,
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
export default SubCat;
