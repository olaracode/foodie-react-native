import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/main/Home';
import Explore from '../components/main/Explore';
import Add from '../components/main/Add';
import Bookmarks from '../components/main/Bookmarks';
import Profile from '../components/main/Profile';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={styles.addButton} 
        onPress={onPress}
    >
        <View>
            {children}
        </View>
    </TouchableOpacity>
)

const Main = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {position:"absolute", backgroundColor: "#2B303A", height: 60}}}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel:() => {return null},
                title: "Cherrish", 
                headerTitleStyle: { fontFamily: "AbrilFatface_400Regular" }, 
                headerStyle: { backgroundColor: "#2B303A" },
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require("../../assets/img/home.png")}
                            resizeMode="contain"  
                            style={{
                                tintColor: focused ? '#EF3C56' : 'black'
                            }}    
                        />
                    </View>
                ),
            }}
            />
             <Tab.Screen name="Explore" component={Explore} options={{
                tabBarLabel:() => {return null},
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require("../../assets/img/explore.png")}
                            resizeMode="contain"      
                            style={{
                                tintColor: focused ? '#EF3C56' : 'black'
                            }}    
                        />
                    </View>
                ),
            }}
            />
             <Tab.Screen name="Add" component={Add} options={{
                headerShown: false, 
                tabBarLabel:() => {return null},
                tabBarIcon: ({focused}) => (
                    
                    <Image source={require("../../assets/img/add.png")}
                        resizeMode="contain"      
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
            />
             <Tab.Screen name="Bookmarks" component={Bookmarks} options={{
                tabBarLabel:() => {return null},
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require("../../assets/img/bookmarks.png")}
                            resizeMode="contain"      
                            style={{
                                tintColor: focused ? '#EF3C56' : 'black'
                            }}    
                        />
                    </View>
                ),
            }}
            />
             <Tab.Screen name="Profile" component={Profile} options={{
                 tabBarLabel:() => {return null},
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require("../../assets/img/person.png")}
                            resizeMode="contain"     
                            style={{
                                tintColor: focused ? '#EF3C56' : 'black'
                            }}     
                        />
                    </View>
                ),
            }}
            />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2B303A"
    },
    addButton: {
        width: 60,
        height: 60,
        bottom: 30,
        backgroundColor:"#A0CAB3",
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: "center"
    }
})

export default Main
