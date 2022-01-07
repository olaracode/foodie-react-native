import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/main/Home";
import Explore from "../components/main/Explore";
import Add from "../components/main/Add";
import Bookmarks from "../components/main/Bookmarks";
import Profile from "../components/main/Profile";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      width: 60,
      height: 60,
      bottom: 30,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#353A44",
    }}
    onPress={onPress}
  >
    <View>{children}</View>
  </TouchableOpacity>
);

const Main = () => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#2B303A",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          title: "Cherrish",
          headerTitleStyle: { fontFamily: "AbrilFatface_400Regular" },
          headerStyle: { backgroundColor: "#2B303A" },
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="home"
                size={20}
                color={focused ? colors.primary : "white"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="compass"
                size={20}
                color={focused ? colors.primary : "#000000"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/img/add.png")}
              resizeMode="contain"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="bookmark"
                size={20}
                color={focused ? colors.primary : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="user"
                size={20}
                color={focused ? colors.primary : "black"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#2B303A",
    },
    addButton: {
      width: 60,
      height: 60,
      bottom: 30,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Main;
