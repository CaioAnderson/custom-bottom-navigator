import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');


export default function TabBar({ state, navigation }: any) {
    const { routes } = state;

    const [selected, setSelected] = useState('Home');

    function renderColor(currentTab: any) {
        return currentTab === selected ? '#A457BF' : 'black';
    }

    function handleOnPress(activeGuide: string, index: number) {
        if (state.index !== index) {
            setSelected(activeGuide);
            navigation.navigate(activeGuide)
        }

    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => (
                        <Tab tab={route}
                            icon={route.params.icon}
                            onPress={() => handleOnPress(route.name, index)}
                            color={renderColor(route.name)}
                            key={route.key} />
                    ))
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 300,
        borderRadius: 100,
        elevation: 2,

    }
})

