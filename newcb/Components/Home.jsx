import { Image, ImageBackground, StyleSheet, FlatList, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Container, NativeBaseProvider, createContext } from "native-base";
import { Button } from "native-base";
import Footer from "./Footer";
import { UserContext } from "./Global/ContextAPI";
import { useContext, useState, useEffect, useMemo } from "react";
import Loader from "./Global/Loader";
import { DataContext } from "./Global/./ContextFB";
import { Carousel } from '../Components/Global/Carousel.jsx';
import { SliderBox } from 'react-native-image-slider-box';
const color = "#E89452";


const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => {
  // Memoize the JSX structure
  const itemContent = useMemo(() => (
    <TouchableOpacity onPress={onPress} style={[styles.recommendedItem]}>
      <Text
        style={{ color: textColor, fontSize: 19, fontFamily: "LeagueSpartan-Regular" }}
        onPress={() =>
          navigation.navigate("SubCategoryNav", {
            screen: "Recipe",
            params: { name: item.RecipeName, id: item.id },
          })
        }
      >
        {item.RecipeName}
      </Text>
    </TouchableOpacity>
  ), [onPress, textColor, navigation, item.RecipeName, item.id]);

  return itemContent;
};

// const customTextProps = {
//   style: {
//     fontFamily: 'LeagueSpartan-SemiBold', // Use the correct font family name
//     color: "white",
//     fontSize: 23,
//   },
// };



const Home = ({ route, navigation }) => {
  // Always write Data.Data for accessing data elements from firebase in other components
  const images = [
    require(".././imgs/image1.jpg"),
    require(".././imgs/image2.jpg"),
    require(".././imgs/image3.jpg"),
    require(".././imgs/image4.jpg"),
  ]
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState();

  const Data = useContext(DataContext);
  const { LoggedIn } = useContext(UserContext);
  let topRecipes;


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor="#AC6A36"
        navigation={navigation}
      />
    );

  }
  //Prevents user from going back to login screen after logging in
  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (LoggedIn) {
          e.preventDefault();
        }
      }), [LoggedIn, navigation]);

  useEffect(() => {
    if (Data.Data) {
      setIsLoading(false);
      console.log("Recipe data: ", Data.Data);
    }
  }, [Data]);

  return (
    <NativeBaseProvider style={{ backgroundColor: color }}>
      <ImageBackground
        source={require('../imgs/mainBg.jpg')}
        resizeMode="cover"
        style={styles.bgimage}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.HeadingText}>Cookbook</Text>
              </View>
              <View style={styles.container}>
                <View style={styles.carousel}>
                  <SliderBox
                    images={images}
                    dotColor="white"
                    inactiveDotColor="#dddddd"
                    imageLoadingColor="grey"
                    circleLoop={true}
                    resizeMode={'cover'}
                    dotStyle={{ width: 11, height: 11, borderRadius: 10 }}
                    disableOnPress={true}
                    autoplay={true}></SliderBox>
                </View>
                {/* <View>
                <Carousel />
              </View> */}
                <View style={styles.innercontainers}>
                  <View style={styles.headings}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: '#C77E45',
                        fontFamily: 'LeagueSpartan-SemiBold',
                      }}>
                      Recommended For You
                    </Text>
                  </View>
                  {
                    Data.Data ?
                      <Text style={{
                        // textAlign: "center",
                        color: '#C77E45',
                        fontSize: 19,
                        marginLeft: 17,
                        fontFamily: 'LeagueSpartan-Regular',
                      }}>
                        Please check your connection
                      </Text>
                      :
                      <SafeAreaView style={{ marginLeft: 15, marginTop: 10 }}>
                        <FlatList
                          data={Data.Data ? Data.Data.slice(0, 5) : ''}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          extraData={selectedId}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        />
                      </SafeAreaView>
                  }
                  <View style={styles.headings}>
                    <Text
                      style={{
                        fontSize: 23,
                        color: '#C77E45',
                        marginTop: 20,
                        fontFamily: 'LeagueSpartan-SemiBold',
                      }}>
                      Categories
                    </Text>
                  </View>
                  <View style={styles.categoryParent}>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Break Fast' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/breakfast.jpg')}
                        width={100}
                        height={100}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        {' '}
                        Breakfast
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Lunch' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/lunch.jpg')}
                        width={100}
                        height={100}
                        style={{ borderWidth: 1 }}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        {' '}
                        Lunch
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Dinner' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/dinner.jpg')}
                        width={100}
                        height={100}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        {' '}
                        Dinner
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Desserts' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/dessert.jpg')}
                        width={100}
                        height={100}
                        style={{ borderWidth: 1 }}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        {' '}
                        Dessert
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Fast Food' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/fastFood.jpg')}
                        width={100}
                        height={100}
                        style={{ borderWidth: 1 }}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        {' '}
                        Fast Food
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() =>
                        navigation.navigate('SubCategoryNav', {
                          screen: 'SubCategory',
                          params: { name: 'Appetizer' },
                        })
                      }>
                      <Image
                        source={require('.././imgs/appetizers.jpg')}
                        width={100}
                        height={100}
                      />
                      <Text
                        style={{
                          color: '#C77E45',
                          fontSize: 19,
                          fontFamily: 'LeagueSpartan-Regular',
                        }}>
                        Appetizers
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.headings}>
                    <Text
                      style={{
                        fontSize: 23,
                        color: '#C77E45',
                        fontFamily: 'LeagueSpartan-SemiBold',
                      }}>
                      New Recipes
                    </Text>
                  </View>
                  {
                    Data.Data ?
                      <Text style={{
                        // textAlign: "center",
                        color: '#C77E45',
                        fontSize: 19,
                        marginLeft: 17,
                        fontFamily: 'LeagueSpartan-Regular',
                      }}>
                        Please check your connection
                      </Text>
                      :
                      <SafeAreaView style={{ marginLeft: 15, marginTop: 10 }}>
                        <FlatList
                          data={Data.Data ? Data.Data.slice(0, 5) : ''}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          extraData={selectedId}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        />
                      </SafeAreaView>
                  }
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
            </ScrollView>
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
  // Carousel
  carousel: {
    marginTop: 10,
    backgroundColor: "#b9b9b942",
  },
  // Heading Text
  HeadingText: {
    color: "white",
    fontSize: 28,
    paddingTop: 15,
    paddingRight: 15,
    textAlign: "center",
    fontFamily: "LeagueSpartan-Regular"
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
    marginBottom: 40,
    padding: 0,
    flex: 1,
  },
  recommendedItem: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    fontSize: 18,
    backgroundColor: "#F7DAC3",
    color: "#AC6A36",
    borderRadius: 10,
    marginRight: 18,
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
    // alignItems: "center",
    marginLeft: 10,
    padding: 6,
    color: "#C77E45"
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
  categoryParent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // marginLeft: 40 ,
    paddingTop: 0,
    paddingHorizontal: 18,
    columnGap: 16,
    // borderWidth: 1,
    alignItems: "center"
  },
  categoryItem: {
    display: "flex",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10,
    width: "30%"
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