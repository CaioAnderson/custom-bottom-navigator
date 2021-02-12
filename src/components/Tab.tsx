import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function Tab({ color, tab, onPress, icon }: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon && <AntDesign name={icon} size={20} color={color} />}
            <Text style={{ color }}>{tab.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
})

