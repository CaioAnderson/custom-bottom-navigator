import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function User(){
    return(
        <View style={styles.container}>
            <Text>Caio Anderson</Text>
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