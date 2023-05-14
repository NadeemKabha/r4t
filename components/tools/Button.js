import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity  style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}      


const styles = StyleSheet.create({
  
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },button: {
    backgroundColor: 'white',
    width:200,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    height:50,
  },
});

