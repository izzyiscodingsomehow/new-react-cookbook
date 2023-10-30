import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Container, NativeBaseProvider, HStack, Center } from "native-base";
import { DataContext } from "../Global/ContextFB";
import Footer from "../Footer.jsx";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";

const color = "#E89452";

const SubCat = ({ navigation, route }) => {

  const Data = useContext(DataContext);

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        {/* Main Screen */}
        <ScrollView>
          <HStack  style={styles.container}>
            {Data.Data.filter((item) => item.Category == route.params.name).map(
              (e) => {
                return (
                  <Container key= {e.id} w="40" style={styles.IngredCont}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Recipe", { name: e.RecipeName, id:e.id })
                      }
                    >
                      <Container>
                      {/* <Image
                        source={{ uri: `${e.ImageLink}` }}
                        style={{ height: 90, width: 90, borderRadius: 50 }}
                      /> */}
                      </Container>
                      <Container >
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    
  },

  // Background Image
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },

  // Ingredient Container
  IngredCont: {
    // borderColor: "red",
    // borderWidth: 3,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },

  // Inner Text
  innerText: {
    textAlign: "center"
    , color: 'black'
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
