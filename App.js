import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import Start from "./src/views/Start.jsx"
import Login from "./src/views/Login.jsx"

import { NativeRouter, Route, Link, Routes } from "react-router-native";


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.main_container}>
        <Start />
      </View>
      <Routes>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
      </Routes>

    </NativeRouter>
  );
}



const styles = StyleSheet.create({
  main_container: {
    height: "100%",
    width: "100%"
  }
});
