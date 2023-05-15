import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import TextBox from "./tools/TextBox";
import Button from "./tools/Button";
import Code from "./Code";

let data;

fetch('http://10.0.0.11:3000/olddata')
      .then((response) => response.json())
      .then(jsonData => {data = jsonData;});

const Main = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/elon.jpeg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Elon Musk</Text>
        <View style={styles.creditContainer}>
          <Text style={styles.creditNumber}>{data.credits}</Text>
        </View>
      </View>
      <Text style={styles.title}>Welcome to R4T!</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.cardp}>
          <Text style={styles.cardTitle}>Plastic</Text>
          <Text style={styles.cardValue}>{data.plastic}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Carton</Text>
          <Text style={styles.cardValue}>{data.carton}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Organic</Text>
          <Text style={styles.cardValue}>{data.organic}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Glass</Text>
          <Text style={styles.cardValue}>{data.glass}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate("Map")}
      >

        <Text style={styles.mapButtonText}>Smart-Bin Near Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate("Code")}
      >

        <Text style={styles.mapButtonText}>Enter Code</Text>
      </TouchableOpacity>

      
      <Text style={styles.quote}>
        “The greatest threat to our planet is the belief that someone else will
        save it.”
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F5F9",
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#84A98C",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#3D405B",
  },
  creditContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  creditIcon: {
    fontSize: 24,
    marginRight: 5,
    color: "#3D405B",
  },
  creditNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D405B",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#3D405B",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    // alignItems: "center",
    
    justifyContent: "center",
    width: "40%",
    height: 150,
  },
  cardp: {
    left:25,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    // alignItems: "center",
    
    justifyContent: "center",
    width: "40%",
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3D405B",
    lineHeight: 22,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D405B",
    lineHeight: 28,
  },
  mapButton: {
    backgroundColor: "#84A98C",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  mapButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  quote: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 30,
    color: "#3D405B",
  },
  button:{
    Left:100,
  },
});

export default Main;
