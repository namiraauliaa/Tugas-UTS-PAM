
import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView, TextInput, SafeAreaView, useState } from "react-native";
import ImagePickerExample from './img';
import Checkbox  from 'expo-checkbox';

 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView }>
        <View style={{flexDirection: "row"}}>
          <View style={styles.divider}/>
          <Text style={styles.title}>
            TwoDo <Text style={{fontWeight: "300", color: "#E9446A"}}>List</Text>
            </Text>
            <View style={styles.divider}/>
        </View>
        <View style={{marginVertical: 48, justifyContent:"center"}}>
        
        <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
        <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
        <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
        <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
          <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
          <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}/>
        
        <ImagePickerExample style={{justifyContent: "flex-end"}} /> 
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
       </View>
       </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start", // primary axis
    alignItems: "center", //secondary

  },
  divider: {
    backgroundColor: "#A2A2A2",
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#2D3436",
    padding : 10,
    paddingHorizontal: 24,
    justifyContent: "space-around",
    marginTop : 20,

  },
  
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: 200,
    color: "black",
    justifyContent: "center",
    marginBottom: 20,
    marginVertical: 10,
    width : '80%',
    alignSelf: "center",

  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  scrollView: {
    paddingRight : 10,
    marginHorizontal: 5,
    width: '95%'
  },
 
});


