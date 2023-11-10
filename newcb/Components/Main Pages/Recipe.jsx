import { Image, StyleSheet, Text, View, ScrollView, Alert, ImageBackground, } from "react-native";
import { NativeBaseProvider, Container, FlatList, Button } from "native-base";
import Footer from "../Footer.jsx";
import React, { useContext } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { DataContext } from "../Global/ContextFB";

const color = "#E89452";

const Recipe = ({ navigation, route }) => {

  const Data = useContext(DataContext);

  const isValidURL = urlString => {
    let urlPattern = new RegExp(/https:\/\//); // fragment locator

    return !!urlPattern.test(urlString);
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <ImageBackground
          source={require('../../imgs/mainBg.jpg')}
          resizeMode="cover"
          style={styles.bgimage}>
          {Data.Data.filter((item) => item.id == route.params.id).map((e) => {
            let procedure = e.Making;

            // remove unwanted whitespace
            procedure = procedure.replace(/(?<!\.)\n/g, " ");

            // add more space before each new paragraph
            procedure = procedure.replace(/\n/g, "\n\n");

            return (
              <Container key={e.id} style={styles.IngredCont}>

                <Container style={{ minWidth: "100%", maxWidth: "100%" }}>
                  <Text style={{ fontSize: 24, color: 'black', fontFamily: "LeagueSpartan-SemiBold" }}>
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
                      console.log(e.VideoLink)
                      return <>
                        <View style={styles.ingredientRow} key={i}>

                          {/* Ingredient Name */}
                          <View style={styles.ingredientColumn}>
                            <Text style={{ width: 200, fontSize: 18, color: "black", fontFamily: "LeagueSpartan-Regular" }}><Text style={{ fontSize: 13, }}>{i}. </Text>{s}</Text>
                          </View>

                          {/* Ingredient Quantity */}
                          <View style={styles.ingredientColumn}>
                            <Text style={{ width: 120, fontSize: 17, color: "black", fontFamily: "LeagueSpartan-Regular" }}>{e.Quantity[i]}</Text>
                          </View>

                        </View>
                      </>
                    })}
                  </Container>


                </Container>

                {"\n"}

                <Container style={{ minWidth: "100%", maxWidth: "120%" }}>
                  <Text style={{ fontSize: 24, color: 'black', fontFamily: "LeagueSpartan-SemiBold" }}>Recipe</Text>
                  {/* Procedure */}
                  <Text style={styles.makingstyle}>{procedure}</Text>
                </Container>

                {
                  isValidURL(e.VideoLink) ?
                    <Container style={styles.refVid}>
                      <Text style={{ fontSize: 24, color: 'black', fontFamily: "LeagueSpartan-SemiBold" }}>
                        Video Player
                      </Text>
                      <View style={{ position: "relative" }} >
                        <Button style={{ backgroundColor: color, borderRadius: 30 }} onPress={() =>
                          navigation.navigate("SubCategoryNav", {
                            screen: "Youtube",
                            params: { url: e.VideoLink },
                          })
                        }>
                          <Image
                            source={require("../../imgs/playIcon.jpg")}
                            style={{
                              height: 20,
                              width: 20,

                            }}
                          />
                        </Button>
                        {/* <YoutubePlayer width={340} height={300} play={false} videoId={e.VideoLink} /> */}
                      </View>


                    </Container>
                    : null}

              </Container>
            );
          })}
        </ImageBackground>
      </ScrollView>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  // bgimage
  bgimage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  // Main Container
  IngredCont: {
    marginTop: 20,
    marginBottom: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    minWidth: "85%",
    maxWidth: "85%",
    // borderWidth: 1
  },
  ingredientsWrapper: {
    position: "relative",
    left: -29,
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
    minWidth: "100%",
    maxWidth: "100%"
  },

  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // Reference Video
  refVid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "start",
    minWidth: "100%",
    maxWidth: "100%",
    gap: 10,
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
    fontSize: 19,
    textAlign: "justify",
    lineHeight: 23,
    fontFamily: "LeagueSpartan-Regular",
    color: 'black'
  },
});

export default Recipe;
