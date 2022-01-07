import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
import { useFonts, Tinos_400Regular } from "@expo-google-fonts/tinos";
import LoginForm from "../components/login/LoginForm.jsx";
import RegisterButton from "../components/login/RegisterButtons.jsx";
import { useTheme } from "@react-navigation/native";

export default function Login({ navigation }) {
  const { colors } = useTheme();

  let [fontsLoaded] = useFonts({
    Tinos_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={styles.titleText}>Login to Cherrish</Text>
        <LoginForm navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    maxWidth: "100%",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Tinos_400Regular",
    fontSize: 34,
  },

  register: {
    position: "absolute",
    top: "90%",
  },
  registerLink: {
    color: "#EF3C56",
    fontWeight: "bold",
  },
});
