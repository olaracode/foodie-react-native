import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import Start from "./src/views/Start.jsx"
import Login from "./src/views/Login.jsx"
import Register from "./src/views/Register.jsx"
import Main from "./src/views/Main.jsx"


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import injectContext from "./src/store/appContext";



const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)'
  }
}


function App() {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Login" component={Login} options={{ title: "Cherrish", headerTitleStyle: { fontFamily: "AbrilFatface_400Regular" }, headerStyle: { backgroundColor: "#2B303A" } }} />
          <Stack.Screen name="Register" component={Register} options={{ title: "", headerTitleStyle: { fontFamily: "AbrilFatface_400Regular" }, headerStyle: { backgroundColor: "#2B303A" } }} />
          <Stack.Screen name="Main" component={Main} options={{
            headerShown: false,
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default injectContext(App)