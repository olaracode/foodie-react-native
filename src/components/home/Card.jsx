import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/FontAwesome';


const Card = ({post}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    let [fontsLoaded] = useFonts({
        Tinos_400Regular,
      });
    
    const [like, setlike] = useState(false)
    const [saved, setSaved] = useState(false)
    if (!fontsLoaded) {
        return (
            <Text>
                Loading
            </Text>
        );
    } else {
        return (
           
                <View style={styles.cardContainer}>
                    <Image source={post.image}
                        style={{
                            maxWidth: "100%",
                            borderTopRightRadius: 8,
                            borderTopLeftRadius: 8,
                            height: 300
                            
                        }}
                    />
                    <View style={styles.cardBottom}>
                        <View style={styles.bottomHeader}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Image source={post.profileImage} resizeMode="contain" style={styles.profileImage} />
                                <Text style={{paddingHorizontal: 10}}>@{post.username}</Text>
                            </View>
                            <Text style={{color: colors.textClear}}>Follow</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10}}>

                            <Text style={{fontWeight: "bold", fontSize: 24, paddingBottom: 5}}>
                                {post.dishName}
                            </Text>
                            
                            </View>
                            <Text>
                                {post.dishDescription}
                            </Text>
                        </View>
                        <View style={styles.dishSpecs}>
                            <View style={{flexDirection: "row"}}>
                                <View style={styles.specs}>
                                    <Icon name="users" size={20} color={colors.text}/>
                                    <Text style={{paddingLeft: 5}}>3-5</Text>
                                </View>
                                <View style={styles.specs}>
                                    <Icon name="clock-o" size={20} color={colors.text} />
                                    <Text style={{paddingLeft: 5}}>2 Hr</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardButtons}>
                            <TouchableOpacity style={[styles.ctaButton, styles.elevation]}>
                                <Text style={{fontWeight: "bold"}}>
                                    Preparation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeButton} onPress={() => setlike(!like)}>
                                <Icon name="heart" size={20} color={like ? "red" : "#ffffff"} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={() => setSaved(!saved)}>
                                <Icon name="bookmark" size={20} color={saved ? "#D68C45" : "#ffffff"}/>
                            </TouchableOpacity>
                        </View>
                    </View>    
                </View>
        )
    }
}

const createStyles = (theme) => StyleSheet.create({
    logoText: {
        fontFamily: "Tinos_400Regular",

    },
    cardContainer: {
        flexDirection: "column",
        marginTop: 15,
        width: "90%",
        backgroundColor: theme.card,
        alignSelf: "center",
        borderRadius: 8,
        maxHeight: 650,
    },
    cardBottom: {
        padding: 20,
    },
    bottomHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    profileImage: {
        height: 35,
        width: 35,
        borderRadius: 150,
    },
    cardBody: {
        marginTop: 20,
        fontFamily: "Roboto_400Regular"
    },
    dishSpecs: {
        justifyContent: "space-between",
        marginTop: 10,
        flexDirection: "row",
        width: "100%"
    },
    specs: {
        flexDirection: "row",
        marginRight: 10,
        alignItems: "center"
    },
    specsIcon: {
        marginRight: 5,
        tintColor: theme.text,
        height: 15,
        width: 20
    },
    cardButtons: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    elevation: {
        elevation: 10,
        shadowColor: '#000',
      },
    ctaButton: {
        backgroundColor: theme.secondary,
        borderRadius: 100,
        width: 194,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    likeButton: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    saveButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }

})

/*
<View style={styles.specs}>
    <Image style={{width: 20, height:20, tintColor: "#fafafa", marginRight: 5}} source={require("../../../assets/img/favorite_border.png")}/>
    <Text>200</Text>
</View>
*/
export default Card
