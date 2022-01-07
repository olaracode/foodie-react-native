import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
import { useFonts, Tinos_400Regular } from "@expo-google-fonts/tinos";

export default function Start({ navigation }) {
  let [fontsLoaded] = useFonts({
    Tinos_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/home.jpg")}
          style={styles.home}
        >
          <Image
            source={require("../../assets/img/logo.png")}
            style={styles.logo}
          />
        </ImageBackground>
        <Text style={styles.descriptionText}>
          Find and share recipes with chefs and food enthusiasts all over the
          world
        </Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionText: {
    marginTop: 350,
    width: 353,
    height: 158,
    fontFamily: "Tinos_400Regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
  },
  home: {
    position: "absolute",
    width: "100%",
    height: 483,
    left: 0,
    top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    shadowColor: "#00b249",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 5,
  },
  buttonText: {
    textAlign: "center",
    margin: "auto",
    lineHeight: 28,
    fontSize: 24,
  },
  startButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "90%",
    height: 73,
    top: "90%",
    fontFamily: "Tinos_400Regular",
    color: "white",
    backgroundColor: "#EF3C56",
    borderRadius: 50,
  },
  logo: {
    position: "absolute",
    width: 85,
    height: 117,
    left: 17,
    top: 30,
  },
  container: {
    alignSelf: "stretch",
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#2B303A",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
});
