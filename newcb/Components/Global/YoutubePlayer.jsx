import React from "react";
import { StyleSheet, Text, View, ScrollView,ImageBackground } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Youtube = ({ route }) => {
  return (
    <ImageBackground
      source={require('../../imgs/mainBg.jpg')}
      resizeMode="cover"
      style={styles.bgImage}>
    <View style={styles.container}>
      <YoutubePlayer height={300} play={true} videoId={route.params.url} />  
    </View>
    </ImageBackground>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Youtube;
