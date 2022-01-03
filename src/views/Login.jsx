import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import LoginForm from '../components/login/LoginForm.jsx';
import RegisterButton from '../components/login/RegisterButtons.jsx';


export default function Login({navigation}) {
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
        <Text style={styles.titleText}>Login to Cherrish</Text>
        <LoginForm navigation={navigation} />
        <Text style={styles.register}>
          Don't have an account? {" "}
          <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
            Register now
          </Text>
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B303A",
    flex: 1,
    alignItems: 'center',
    maxWidth: "100%",
    justifyContent: "center"
  },
  titleText: {
    fontFamily: "Tinos_400Regular",
    fontSize: 34,
  },

  register: {
    position: "absolute",
    top: "90%"
  },
  registerLink: {
    color: "#EF3C56",
    fontWeight: "bold"
  }
});
