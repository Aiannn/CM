import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'

import Icon from 'react-native-vector-icons/FontAwesome'

const myIcon = <Icon name='home' />

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AppNavigator from './src/navigation/AppNavigator'

const Tab = createBottomTabNavigator()

class App extends React.Component {

  state = {
    store: false 
  }


  handlePress = () => {
    this.setState({
      store: !this.state.store
    })
  }

  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <NavigationContainer>
  <SafeAreaView style={styles.container}>
    <Text onPress={this.handlePress}>Hello World!</Text>
    <Text>My name is Ayan</Text>
    <Text>And this is my application!</Text>
    <Image source={require('./assets/icon.png')} />
    <TouchableOpacity
      onPress={() => console.log('Touched!')}
    >
      <Image
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'
        }} 
      />
    </TouchableOpacity>
    {this.state.store ? 
      <Text>You touched Text</Text>
      :
      null
    }
    <StatusBar style="auto" />
  </SafeAreaView>

  <Tab.Navigator>
    <Tab.Screen name='Home' component={Login} />
    <Tab.Screen name='Settings' component={Signup} />
  </Tab.Navigator>

</NavigationContainer> */}