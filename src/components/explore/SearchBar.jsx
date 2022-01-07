import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

const SearchBar = () => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  let dropShadow = Platform.OS === "ios" ? styles.shadowProp : styles.elevation;

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={[styles.input, dropShadow]} />
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 30,
    },
    input: {
      backgroundColor: theme.card,
      width: "90%",
      height: 40,
      alignSelf: "center",
      borderRadius: 100,
      padding: 10,
    },
    elevation: {
      elevation: 10,
      shadowColor: "#000",
    },
    shadowProp: {
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });

export default SearchBar;
