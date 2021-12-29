import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import RegisterForm from '../components/register/RegisterForm.jsx';

export default function Login() {
  let [fontsLoaded] = useFonts({
    Tinos_400Regular,
  });
  if (!fontsLoaded) {
    return (<Text>
      Loading
    </Text>);
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Register</Text>
        <RegisterForm />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#2B303A",
    flex: 1,
    maxWidth: "100%",
  },
  titleText: {
    fontFamily: "Tinos_400Regular",
    fontSize: 34,
    width: "90%",
    alignSelf: "center"
  },
  hr: {
    marginVertical: 40,
    borderBottomColor: "#EF3C56",
    borderBottomWidth: 1,
    width: "70%"
  },
});
