import React from 'react' 
import { View, StyleSheet, Text } from 'react-native'

class First extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>First</Text>
            </View>
        )
    }
}

export default First

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})
