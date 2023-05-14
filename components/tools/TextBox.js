import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const TextBox = (props) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={props.text}
        secureTextEntry={props.true}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 10,

    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: "black",
  },
});

export default TextBox;
