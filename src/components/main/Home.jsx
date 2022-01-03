import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const Home = () => {
    let [fontsLoaded] = useFonts({
        Tinos_400Regular,
      });

    if (!fontsLoaded) {
        return (
            <Text>
                Loading
            </Text>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Image source={require("../../../assets/img/unnamed.jpg")}
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
                                <Image source={require("../../../assets/img/profile.jpg")} resizeMode="contain" style={styles.profileImage} />
                                <Text style={{paddingHorizontal: 10}}>@olaracode</Text>
                            </View>
                            <Text style={{color: "#878787"}}>Follow</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10}}>

                            <Text style={{fontWeight: "bold", fontSize: 24, paddingBottom: 5}}>
                                Tuna Sashimi
                            </Text>
                            
                            </View>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, possimus...
                            </Text>
                        </View>
                        <View style={styles.dishSpecs}>
                            <View style={{flexDirection: "row"}}>
                                <View style={styles.specs}>
                                    <Image style={styles.specsIcon} source={require("../../../assets/img/persons.png")}/>
                                    <Text>3-5</Text>
                                </View>
                                <View style={styles.specs}>
                                    <Image style={{width: 20, height:20, tintColor: "white", marginRight: 5}} source={require("../../../assets/img/clock.png")}/>
                                    <Text>2 Hr</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardButtons}>
                            <TouchableOpacity style={styles.ctaButton}>
                                <Text style={{fontWeight: "bold"}}>
                                    Preparation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeButton}>
                                <Image style={{tintColor: "white"}} source={require("../../../assets/img/favorite_border.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton}>
                                <Image style={{tintColor: "white"}} source={require("../../../assets/img/bookmark_border.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    logoText: {
        fontFamily: "Tinos_400Regular",

    },
    cardContainer: {
        flexDirection: "column",
        marginTop: 15,
        width: "90%",
        backgroundColor: "#2B303A",
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
        tintColor: "white",
        height: 15,
        width: 20
    },
    cardButtons: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ctaButton: {
        backgroundColor: "#29C16E",
        borderRadius: 100,
        width: 194,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    likeButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#EF3C56",
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
export default Home
