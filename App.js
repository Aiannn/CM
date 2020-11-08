import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text } from "react-native";
// import { createBottomTabNavigator, createAppContainer } from "@react-navigation/bottom-tabs";
import styles from "./assets/styles";
import HomeScreen from "./src/containers/Home";
import MatchesScreen from "./src/containers/Matches";
import MessagesScreen from "./src/containers/Messages";
import ProfileScreen from "./src/containers/Profile";
import Icon from "./src/components/Icon";

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './src/containers/Profile';

const App = createBottomTabNavigator()

function MyTabs(props) {
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen name='Home'>
          {(props) => (
            <HomeScreen 
              // {...props}
              // currentUser={currentUser}
              // logoutHandler={logoutHandler}
            />
          )}
        </App.Screen>
        <App.Screen name='Matches'>
          {(props) => (
            <MatchesScreen 

            />
          )}
        </App.Screen>
        <App.Screen name='Chat'>
          {(props) => (
            <MessagesScreen 
              
            />
          )}
        </App.Screen>
        <App.Screen name='User'>
          {(props) => (
            <ProfileScreen 
              
            />
          )}
        </App.Screen>
      </App.Navigator>
    </NavigationContainer>
  )
}

export default MyTabs
// 	{
// 		Explore: {
// 			screen: HomeScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="explore" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Matches: {
// 			screen: MatchesScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="heart" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Chat: {
// 			screen: MessagesScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="chat" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Profile: {
// 			screen: ProfileScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="user" />
// 						</Text>
// 					);
// 				}
// 			}
// 		}
// 	},
// 	{
// 		tabBarOptions: {
// 			activeTintColor: "#7444C0",
// 			inactiveTintColor: "#363636",
// 			labelStyle: {
// 				fontSize: 14,
// 				textTransform: "uppercase",
// 				paddingTop: 10
// 			},
// 			style: {
// 				backgroundColor: "#FFF",
// 				borderTopWidth: 0,
// 				paddingVertical: 30,
// 				height: 60,
// 				marginBottom: 0,
// 				shadowOpacity: 0.05,
// 				shadowRadius: 10,
// 				shadowColor: "#000",
// 				shadowOffset: { height: 0, width: 0 }
// 			}
// 		}
// 	}

// export default createAppContainer(App);
