import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Youtube = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <YoutubePlayer height={300} play={true} videoId={route.params.url} />
    </View>
  );
};  

const styles = StyleSheet.create({});
export default Youtube;
