import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import SearchBar from "../explore/SearchBar";
import ExploreCard from "../explore/ExploreCard";

const Explore = () => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <SearchBar />
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <ExploreCard style={{ flex: 2 }} />
        <ExploreCard style={{ flex: 2 }} />
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 40,
    },
  });

export default Explore;
