import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Create(){
    return(
        <View style={styles.container}>
            <Text>Create</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})