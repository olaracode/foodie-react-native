import React from "react";
import { useFonts, Tinos_400Regular } from "@expo-google-fonts/tinos";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
const RegisterButtons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={[styles.Button, styles.email]}
      >
        <Text>Register using your email</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    backgroundColor: "#353A44",
    borderRadius: 50,
  },
  email: {
    borderWidth: 1,
    borderColor: "#29C16E",
  },
  google: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#353A44",
  },
  googleLogo: {
    paddingLeft: 5,
  },
});

export default RegisterButtons;
