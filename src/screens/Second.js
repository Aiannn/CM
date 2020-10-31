import React from 'react' 
import { View, StyleSheet, Text } from 'react-native'

class Second extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Second</Text>
            </View>
        )
    }
}

export default Second

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})