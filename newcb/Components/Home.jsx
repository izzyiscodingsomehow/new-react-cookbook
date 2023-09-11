import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, createContext } from "native-base";
import { Button } from "native-base";
import Footer from "./Footer";
import { UserContext, } from "./Global/ContextAPI";
import { useContext, useState, useEffect } from "react";
import Listener from "./Global/Listener";
import Loader from "./Global/Loader";

const color = "#E89452";

const Home = ({ route, navigation}) => {
  // Always write Data.Data for accessing data elements from firebase in other components

  /* Check if User is logged In or Not */
  // const { Opt } = route.params;
  // console.log(Opt);

  // /* If User Signs In using Google, Attach Listener */
  // if(Opt == 1) {
  //   Listener();
  // }
  const [isLoading,setIsLoading]=useState(true);
    
  const Data = useContext(UserContext);
  useEffect(() => {
      if(Data.Data)
      setIsLoading(false);
  }, [Data]);
  //console.log(Data.Data.map(e => e.id))
  //alert(Opt);
  return (
    <NativeBaseProvider style={{backgroundColor:color}}>
      <ImageBackground
        source={require("../imgs/mainBg.jpg")}
        resizeMode="cover"
        style={styles.bgimage}
      >
        {isLoading?<Loader/>:(
        <>
        <View style={styles.header}>
          <Text style={styles.HeadingText}>Cook Book</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.innercontainers}>
          
            <View style={styles.headings}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Categories
              </Text>
            </View>

            <View style={styles.subbuttons}>
              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Break Fast" },
                  })
                }
              >
                <Text style={styles.subtext}>Break Fast</Text>
              </Button>

              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Lunch" },
                  })
                }
              >
                <Text style={styles.subtext}>Lunch</Text>
              </Button>
              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Dinner" },
                  })
                }
              >
                <Text style={styles.subtext}>Dinner</Text>
              </Button>
              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Appetizer" },
                  })
                }
              >
                <Text style={styles.subtext}>Appetizer</Text>
              </Button>
              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Fast Food" },
                  })
                }
              >
                <Text style={styles.subtext}>Fast Food</Text>
              </Button>
              <Button
                style={styles.subbutton}
                onPress={() =>
                  navigation.navigate("SubCategoryNav", {
                    screen: "SubCategory",
                    params: { name: "Desserts" },
                  })
                }
              >
                <Text style={styles.subtext}>Desserts</Text>
              </Button>
            </View>
          </View>
          <View style={styles.innercontainers}>
            <View style={styles.reccomended}>
              <View style={styles.headings}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Top Recipes
                </Text>
              </View>
              <Button style={styles.morebutton} onPress={() =>
                navigation.navigate("SubCategoryNav", {
                  screen: "AllCategory",
                  params: { name: "Top Recipes" },
                })
              }>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Explore Now
                  </Text>
                  <Image
                    source={require("../imgs/arrow.jpg")}
                    style={styles.arrowimg}
                  />
                </View>
              </Button>
            </View>
            <View style={styles.subbuttons}>
              {Data.Data.slice(0,5).map((e) => {
                return (
                  <Button
                    key={e.id}
                    style={styles.subbutton}
                    onPress={() =>
                      navigation.navigate("SubCategoryNav", {
                        screen: "Recipe",
                        params: { name: e.RecipeName, id: e.id },
                      })
                    }
                  >
                    <Text style={styles.subtext}>{e.RecipeName}</Text>
                  </Button>
                );
              })}
            </View>
          </View>
          <View style={styles.reccomended}>
            <View style={styles.headings}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                New Recipes
              </Text>
            </View>
            <Button
              style={styles.morebutton}
              onPress={() =>
                navigation.navigate("SubCategoryNav", {
                  screen: "AllCategory",
                  params: { name: "New Recipes" },
                })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Explore Now
                </Text>
                <Image
                  source={require("../imgs/arrow.jpg")}
                  style={styles.arrowimg}
                />
              </View>
            </Button>
          </View>
          <View style={styles.subbuttons}>
            {Data.Data.slice(0, 3).map((e) => {
              return (
                <Button
                  key={e.id}
                  style={styles.subbutton}
                  onPress={() =>
                    navigation.navigate("SubCategoryNav", {
                      screen: "Recipe",
                      params: { name: e.RecipeName, id: e.id },
                    })
                  }
                >
                  <Text style={styles.subtext}>{e.RecipeName}</Text>
                </Button>
              );
            })}
          </View>
          {/*}
          <View style={styles.reccomendedcontainer}>
             <View style={styles.reccomended}> 
            <Text style={styles.reccheading}>Recommended</Text>
             <Button style={styles.morebutton}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                  >
                    More of These
                  </Text>
                  <Image
                    source={require("../imgs/arrow.jpg")}
                    style={styles.arrowimg}
                  />
                </View>
              </Button> 
            <View style={styles.subbuttons}>
              {Data.Data.slice(0, 3).map((e) => {
                return (
                  <Button
                    key={e.id}
                    style={styles.subbutton}
                    onPress={() =>
                      navigation.navigate("SubCategoryNav", {
                        screen: "Recipe",
                        params: { name: e.RecipeName, id: e.id },
                      })
                    }
                  >
                    <Text style={styles.subtext}>{e.RecipeName}</Text>
                  </Button>
                );
              })}
            </View>
            {/* <View style={styles.reccrecipe}>
              <Button style={styles.reccrecipebutton}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../imgs/suggbox.jpg")}
                    style={{ height: 65, width: 65 }}
                  />
                  <Text style={styles.reccrecipetext}>Recipe</Text>
                </View>
              </Button>
            </View> 
          </View>
          */}
        </View>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
        </>
      )}
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  // Heading Text
  HeadingText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  // Sub Buttons
  subbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  // Sub Button
  subbutton: {
    backgroundColor: color,
    borderRadius: 10,
    alignItems: "center",
    width: 120,
    marginVertical: 5,
  },
  // Sub Text
  subtext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  // Header
  header: {
    backgroundColor: color,
    width: "100%",
    height: 70,
  },
  // Main Container
  container: {
    marginTop: -10,
    marginBottom: 310,
    padding: 0,
    flex: 1,
  },
  // Inner Container
  innercontainers: {
    marginTop: 20,
  },
  // Reccomended Container
  reccomendedcontainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  // Headings
  headings: {
    alignItems: "center",
    backgroundColor: color,
    marginLeft: 6,
    padding: 6,
    width: 150,
    borderRadius: 15,
    borderBottomWidth: 6,
    borderBottomColor: "#00000045",
  },
  // Reccomended
  reccomended: {
    flexDirection: 'row'
  },
  // Reccomended Heading
  reccheading: {
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 13,
    backgroundColor: "#ffffff55",
  },
  // More Button
  morebutton: {
    backgroundColor: "#ffffff55",
    marginLeft: 65,
  },
  // Reccomended Recipe
  reccrecipe: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  // Reccomended Recipe Button
  reccrecipebutton: {
    backgroundColor: "#ffffff55",
  },
  // Reccomended Recipe Text
  reccrecipetext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  // Arrow Image
  arrowimg: {
    width: 30,
    height: 11,
    marginTop: 6,
    marginLeft: 5,
  },
  // Background Image
  bgimage: {
    flex: 1,
  },
  // ImageText
  imagetext: {
    flexDirection: "row",
    alignItems: "center",
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
export default Home;