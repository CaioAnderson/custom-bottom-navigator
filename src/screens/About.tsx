import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function About({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
                <Text>Clique para ir pro About!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})