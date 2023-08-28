import { Image, StyleSheet, Text, View, ScrollView, Alert} from "react-native";
import { NativeBaseProvider, Container, FlatList, Button  } from "native-base";
import Footer from "../Footer.jsx";
import { UserContext } from "../Global/ContextAPI.jsx";
import React, { useContext } from "react";

const color = "#E89452";

const Recipe = ({ navigation, route }) => {

  const Data = useContext(UserContext);
  const tableHead = ['Ingredients', 'Quantity'];
  
  return (
    <NativeBaseProvider>
      <ScrollView>
        {Data.Data.filter((item) => item.id == route.params.id).map((e) => {
          return (
            <Container key= {e.id} style={styles.IngredCont}>
              <Container style={styles.img}>
                <Image
                  source={{ uri: `${e.ImageLink}` }}
                  style={{ height: 180, width: 300, borderRadius: 10 }}
                />
              </Container>

              {"\n"}
              <Container style={{width: 320}}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>
                  Ingredients
                </Text>
              </Container>

              {/* /* NOT INCLUDED */ }
              {/* <Container>
                  {e.map((s, i) => {
                    return <Text style={{marginVertical: 3, width:250}} key={i}>{s}</Text>;
                  })}
                </Container> */}



              <Container style={styles.ingred}>
                {/* 2 columns for Data Calling Ingredients and Quantity */}
                <Container>
                  {e.Ingredient.map((s, i) => {
                    return <Text style={{marginVertical: 3, width:250, color: 'black' }} key={i}>{s}</Text>;
                  })}
                </Container>

                <Container style={{}}>
                  {e.Quantity.map((s, i) => {
                    return <Text style={{marginVertical: 3,marginLeft:30, color: 'black'}} key={i}>{s}</Text>;
                  })}
                </Container>
              </Container>



              {"\n"}

              <Container style={{}}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>Recipe</Text>
                {/* Procedure */}
                <Text style={styles.makingstyle}>{e.Making}</Text>
              </Container>

              {"\n"}

              <Container style={styles.refVid}>
                <Text style={{ fontSize: 20, fontWeight: "bold",width: 250, color: 'black' }}>
                  Reference Video
                </Text>
                {/* Reference Video Link */}
                <Button onPress={() => navigation.navigate("Youtube", {url: e.VideoLink})} style={styles.YoutubeBut}>Youtube Video</Button>
              </Container>
            </Container>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({

  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },

  // Main Container
  IngredCont: {
    marginTop: 70,
    marginBottom: 310,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },

  ingred: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // Reference Video
  refVid: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Youtube Button
  YoutubeBut: {
    marginTop: 10,
    marginLeft: 80,
    borderRadius: 20,
    backgroundColor: color, 
    color: 'white',
  },
  //Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    backgroundColor: "#ffffff0",
  },
  // making style
  makingstyle: {
    width: 320,
    textAlign: "justify",
    lineHeight: 20,
    color: 'black'
  },
});

export default Recipe;
