import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import TextBox from "./tools/TextBox";
import Button from "./tools/Button";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SvgUri uri="../assets/recycle.svg" />

      <Text style={styles.header}>R4T</Text>
      <Text style={styles.text}>Welcome!</Text>

      <TextBox placeholder="Username" placeholderTextColor="grey" />
      <TextBox placeholder="Password" placeholderTextColor="gray" secureTextEntry={true}
         />
      <StatusBar style="auto" />
      <Button onPress={()=>navigation.navigate('Main')} title="Log in" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F2F2F2",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: 36,
      fontWeight: "bold",
      color: "#004445",
      marginTop: 40,
    },
    logo: {
      width: 200,
      height: 200,
      marginVertical: 30,
    },
    text: {
      color: "#004445",
      fontSize: 28,
      marginVertical: 10,
    },
    inputContainer: {
      width: "80%",
      marginVertical: 10,
    },
    input: {
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      fontSize: 18,
      color: "#004445",
    },
    button: {
      backgroundColor: "#004445",
      width: "80%",
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
export default Login;

