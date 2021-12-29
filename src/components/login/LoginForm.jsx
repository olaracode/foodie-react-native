import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Context } from "../../store/appContext";
import { StyleSheet, Text, TextInput, Image, View, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';


const LoginForm = () => {
  let dropShadow = Platform.OS === "ios" ? styles.shadowProp : styles.elevation
  const { store, actions } = React.useContext(Context);

  let [fontsLoaded] = useFonts({
    Tinos_400Regular,
    Roboto_400Regular
  });
  if (!fontsLoaded) {
    return (<Text>
      Loading
    </Text>);
  } else {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username or Email" style={[styles.input, dropShadow]} />
        <TextInput placeholder="Password" style={[styles.input, dropShadow]} />
        <Text style={styles.auxText}>Forgot your password? <Text style={styles.linkText}>Click Here</Text></Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Button, styles.google]}>
                <Image source={require("../../../assets/img/google.png")} />
                <Text style={styles.googleLogo}>Login using google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    input: {
        marginTop: 30,
        height: 60,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#353A44",
        padding: 15
    },
    container: {
        paddingTop: 30,
        alignItems: 'center',
        width: "100%",
    },
    elevation: {
      elevation: 10,
      shadowColor: '#000',
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    loginButton: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: "90%",
      height: 60,
      backgroundColor: "#EF3C56",
      borderRadius: 50,
    },
    buttonText: {
      textAlign: "center",
      margin: "auto",
      lineHeight: 28,
      fontSize: 24,
      fontFamily: "Tinos_400Regular",
      color: "white",
    },
    auxText: {
      width: "80%",
      marginTop: 5,
      fontWeight: "bold",
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      alignSelf: "center"
    },
    linkText: {
      color: "#29C16E"
    },
    google: {
      flexDirection: "row",
      marginTop: 30,
      backgroundColor: "#353A44",
    },
    googleLogo: {
        paddingLeft: 5,
        fontSize: 20,


        fontFamily: "Tinos_400Regular",
        color: "white",
    },
    Button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: "90%",
      height: 60,
      backgroundColor: "#353A44",
      borderRadius: 50,
      
    },

});

export default LoginForm