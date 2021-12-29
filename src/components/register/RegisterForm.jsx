import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Context } from "../../store/appContext";
import { StyleSheet, Text, TextInput, View,Image, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RegisterForm = () => {
  let dropShadow = Platform.OS === "ios" ? styles.shadowProp : styles.elevation
  const [isChecked, setisChecked] = useState(false)
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
        <TextInput placeholder="Username" style={[styles.input, dropShadow]} />
        <TextInput placeholder="Email" style={[styles.input, dropShadow]} />
        <TextInput placeholder="Password" style={[styles.input, dropShadow]} />
        <View style={styles.terms}>

        <BouncyCheckbox 
          onPress={() => setisChecked(!isChecked)} 
          style={styles.checkBox}
          fillColor="#A0CAB3"
          isChecked={isChecked}
          iconStyle={{ borderColor: "#29C16E" }}
          textStyle={{
            textDecorationLine: "none",
          }}
          text="I have read and agreed to the terms and conditions"
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Button, styles.google]}>
                <Image source={require("../../../assets/img/google.png")} />
                <Text style={styles.googleLogo}>Register using google</Text>
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
      fontSize: 20,
    },
    auxText: {
      marginTop: 5,
      fontWeight: "bold",
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
    },
    linkText: {
      color: "#29C16E"
    },
    terms: {
      marginTop: 30,
      width: "85%",
      flexDirection: "row"
    },
    checkBox: {
      color: "#29C16E"
    },
    google: {
      flexDirection: "row",
      marginTop: 30,
      backgroundColor: "#353A44",
    },
    googleLogo: {
        fontFamily: "Tinos_400Regular",
        color: "white",
        fontSize: 20,
        paddingLeft: 5,
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

export default RegisterForm