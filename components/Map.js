import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import mapimg from '../assets/mapimg.jpeg'
const Map = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={mapimg}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Map;
