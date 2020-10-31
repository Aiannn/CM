import React from 'react' 
import { View, StyleSheet, Text } from 'react-native'

class Third extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Third</Text>
            </View>
        )
    }
}

export default Third

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})