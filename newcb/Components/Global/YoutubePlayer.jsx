import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Youtube = ({ route }) => {

  const url = route.params.url;
  const regexPattern = /\/(?:embed\/|v=|watch\?v=|watch\?feature=player_embed&v=|shorts\/|youtu.be\/|embed.be\/)([a-zA-Z0-9_-]{11})/;
  const ID = url.match(regexPattern);
  // console.log(ID);

  return (
    <ImageBackground
      source={require('../../imgs/mainBg.jpg')}
      resizeMode="cover"
      style={styles.bgImage}>
      <View style={styles.container}>
        <YoutubePlayer
          height={300}
          play={"play"}
          videoId={ID[1]}
        />
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
    justifyContent: 'center',
  },
});
export default Youtube;
