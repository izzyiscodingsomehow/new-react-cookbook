import { Image, StyleSheet, Text, View, ScrollView, Alert,ImageBackground, } from "react-native";
import { NativeBaseProvider, Container, FlatList, Button } from "native-base";
import Footer from "../Footer.jsx";
import React, { useContext } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { DataContext } from "../Global/ContextFB";

const color = "#E89452";

const Recipe = ({ navigation, route }) => {

  const Data = useContext(DataContext);

  return (
    <NativeBaseProvider>
      <ScrollView>
      <ImageBackground
          source={require('../../imgs/mainBg.jpg')}
          resizeMode="cover"
          style={styles.bgimage}>
        {Data.Data.filter((item) => item.id == route.params.id).map((e) => {
          let procedure = e.Making;
          procedure = procedure.replace(/(?<!\.)\n/g, " ");
          return (
            <Container key={e.id} style={styles.IngredCont}>
     
              <Container style={{ width: 320 }}>
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

              <Container >
                <Text style={{ fontSize: 24, color: 'black', fontFamily: "LeagueSpartan-SemiBold" }}>Recipe</Text>
                {/* Procedure */}
                <Text style={styles.makingstyle}>{procedure}</Text>
              </Container>

              <Container style={styles.refVid}>
                <Text style={{ fontSize: 24, width: 260, color: 'black', fontFamily: "LeagueSpartan-SemiBold" }}>
                  Video Player
                </Text>
                <View style={{ position: "relative", left: 40, top: 10 }} >
                  <Button style={{ backgroundColor: color, borderRadius: 30, width: 100 }} onPress={() =>
                      navigation.navigate("SubCategoryNav", {
                      screen: "Youtube",
                      params: { url: e.VideoLink },
                    })
                  }>
                    <Text style={{ color: 'white', textAlign: 'center', marginBottom:5, fontSize: 18, fontFamily: "LeagueSpartan-SemiBold" }}>Play</Text>
                  </Button>
                  {/* <YoutubePlayer width={340} height={300} play={false} videoId={e.VideoLink} /> */}
                </View>

              </Container>

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
  },
  // Main Container
  IngredCont: {
    marginTop: 20,
    marginBottom: 90,
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
    fontSize: 19,
    textAlign: "justify",
    lineHeight: 23,
    fontFamily: "LeagueSpartan-Regular",
    color: 'black'
  },
});

export default Recipe;
