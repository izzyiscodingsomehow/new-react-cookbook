import { Image, StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { NativeBaseProvider, Container, FlatList, Button } from "native-base";
import Footer from "../Footer.jsx";
import { UserContext } from "../Global/ContextAPI.jsx";
import React, { useContext } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const color = "#E89452";

const Recipe = ({ navigation, route }) => {

  const Data = useContext(UserContext);

  return (
    <NativeBaseProvider>
      <ScrollView>
        {Data.Data.filter((item) => item.id == route.params.id).map((e) => {
          return (
            <Container key={e.id} style={styles.IngredCont}>
     
              <Container style={{ width: 320 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", color: 'black' }}>
                  Ingredients
                </Text>
              </Container>

              <Container style={styles.ingred}>
                {/* 2 columns for Data Calling Ingredients and Quantity */}
                {/* <Container>
                  {e.Ingredient.map((s, i) => {
                    return <Text style={{ marginVertical: s.length >= 25 ? 6 : 5, width: s.length >= 30 ? 200 : 250, color: 'black', fontSize: s.length >= 25 ? 14 : 16 }} key={i}><Text style={{ fontSize: 13 }}>{i}</Text>. {s} </Text>;
                  })}
                </Container> */}
                <Container style={styles.ingredientsWrapper}>
                  {e.Ingredient.map((s, i) => {
                    return <>
                      <View style={styles.ingredientRow} key={i}>

                        {/* Ingredient Name */}
                        <View style={styles.ingredientColumn}>
                          <Text style={{ width: 200, fontSize: 16, color: "black" }}><Text style={{ fontSize: 13 }}>{i}. </Text>{s}</Text>
                        </View>

                        {/* Ingredient Quantity */}
                        <View style={styles.ingredientColumn}>
                          <Text style={{ width: 120, fontSize: 15, color: "black" }}>{e.Quantity[i]}</Text>
                        </View>

                      </View>
                    </>
                  })}
                </Container>


              </Container>

              {"\n"}

              <Container >
                <Text style={{ fontSize: 22, fontWeight: "bold", color: 'black' }}>Recipe</Text>
                {/* Procedure */}
                <Text style={styles.makingstyle}>{e.Making}</Text>
              </Container>

              <Container style={styles.refVid}>
                <Text style={{ fontSize: 20, fontWeight: "bold", width: 260, color: 'black' }}>
                  Video Tutorial
                </Text>
                {/* Video Player */}
                <View style={{ position: "relative", left: 40, top: 10 }}>
                  <YoutubePlayer width={340} height={300} play={false} videoId={e.VideoLink} />
                </View>

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
  // Main Container
  IngredCont: {
    marginTop: 20,
    marginBottom: 310,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  ingredientsWrapper: {
    position: "relative",
    left: -53,
  },
  ingredientRow: {
    display: "flex",
    color: "black",
    fontSize: 16,
    width: 400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    color: "black",
    marginBottom: 6,
  },
  ingredientColumn: {
    display: "flex",
    alignSelf: "center",
  },
  ingred: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // Reference Video
  refVid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "start"
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
    marginTop: 10,
    width: 340,
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 23,
    color: 'black'
  },
});

export default Recipe;
