import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ExploreCard = () => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  let dropShadow = Platform.OS === "ios" ? styles.shadowProp : styles.elevation;
  const [isSaved, setIsSaved] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../../assets/img/home.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
        >
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => setIsSaved(!isSaved)}
          >
            <Icon
              name="bookmark"
              size={20}
              color={isSaved ? "#D68C45" : colors.textClear}
              style={styles.saveIcon}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text>Salmon salad</Text>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon name="users" size={20} color={colors.text} />
            <Text style={{ paddingLeft: 5 }}>1-2</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="clock-o" size={20} color={colors.text} />
            <Text style={{ paddingLeft: 5 }}>45 M</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Preparation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      width: "90%",
    },
    cardContainer: {
      backgroundColor: theme.card,
      borderRadius: 8,
      width: "45%",
      maxHeight: 350,
    },
    imageContainer: {
      width: "100%",
      height: "55%",
      padding: 0,
      margin: 0,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
    },
    image: {
      maxWidth: "100%",
      height: "100%",
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
    },
    textContainer: {
      padding: 10,
    },
    iconContainer: {
      marginTop: 5,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    icon: {
      flexDirection: "row",
    },
    button: {
      marginTop: 10,
      width: "100%",
      padding: 5,
      backgroundColor: theme.secondary,
      alignSelf: "center",
      borderRadius: 100,
      alignItems: "center",
    },
    saveIcon: {
      position: "relative",
      padding: 5,
    },
  });

export default ExploreCard;
