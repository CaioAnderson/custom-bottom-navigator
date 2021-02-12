import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import User from '../screens/User';

const { Navigator, Screen } = createStackNavigator();


export default function StackNavigator(){
    return(
        <Navigator screenOptions={{headerTransparent: true, title: ""}}>
            <Screen name='About' component={About} />
            <Screen name='User' component={User} />
        </Navigator>
    );
};

const styles = StyleSheet.create({
    container: {}
})