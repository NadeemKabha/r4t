import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SvgUri } from "react-native-svg";
import TextBox from "./tools/TextBox";
import Button from "./tools/Button";
import ecoBg from "../assets/eco_bg.png";

const Code = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ecoBg} style={styles.background}>
        <Text style={styles.title}>Enter Your Code</Text>

        <View style={styles.inputContainer}>
          <TextBox placeholder="Code" placeholderTextColor="#A0A0A0" />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate("Main2")} title="Apply" />
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#4CAF50",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonContainer: {
    width: "80%",
  },
});

export default Code;
