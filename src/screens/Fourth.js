import React from 'react' 
import { View, StyleSheet, Text } from 'react-native'

class Fourth extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Fourth</Text>
            </View>
        )
    }
}

export default Fourth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})