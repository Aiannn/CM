import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

class Signup extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onChangeText = (name) => (text) => this.setState({[name]: text})

    render() {
        return (
            <View>
                <Input 
                    placeholder='Username'
                    onChangeText={this.onChangeText('username')}
                    value={this.state.username}
                />
                <Input 
                    placeholder='Password'
                    onChangeText={this.onChangeText('password')}
                    value={this.state.password}
                />
                <Button title='Submit' />
            </View>
        )
    }
}

export default Signup
