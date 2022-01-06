import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useFonts, Tinos_400Regular } from '@expo-google-fonts/tinos';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../home/Card';

const Home = () => {
    let [fontsLoaded] = useFonts({
        Tinos_400Regular,
      });
    let posts = [
            {
                id: 1,
                image: require("../../../assets/img/unnamed.jpg"),
                profileImage: require("../../../assets/img/profile.jpg"),
                username: "olaracooks",
                dishName: "Tuna Sashimi",
                dishDescription: "lorem ipsum"
            },
            {
                id: 2,
                image: require("../../../assets/img/unnamed.jpg"),
                profileImage: require("../../../assets/img/profile.jpg"),
                username: "olaracooks",
                dishName: "Tuna Sashimi",
                dishDescription: "lorem ipsum"
            }
        ]
    
    const [like, setlike] = useState(false)
    const renderItem = (posts) => (
        <Card post={posts}/>
    )
    if (!fontsLoaded) {
        return (
            <Text>
                Loading
            </Text>
        );
    } else {
        return (
            <View>

                <FlatList 
                    data={posts}
                    renderItem={renderItem} 
                    keyExtractor={post => post.id}  
                />
            </View>
                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "120%",
        width: "100%",
        marginBottom: 50,
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
    elevation: {
        elevation: 10,
        shadowColor: '#000',
      },
    ctaButton: {
        backgroundColor: "#4E576A",
        borderRadius: 100,
        borderColor: "#111317",
        borderWidth: 1,
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
export default Home
