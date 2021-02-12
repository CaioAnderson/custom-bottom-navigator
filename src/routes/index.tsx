import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import Home from '../screens/Home';
import Create from '../screens/Create';
import About from '../screens/About';

import TabBar from '../components/TabBar';
import StackNavigator from './stackNavigator';

export default function TabContainer() {
    return (
        <Navigator tabBar={(props) => <TabBar {...props} />}>
            <Screen name='Home' component={Home} initialParams={{ icon: 'home' }} />
            <Screen name='Create' component={Create} initialParams={{ icon: 'plus' }} />
            <Screen name='About' component={StackNavigator} initialParams={{ icon: 'user' }} />
        </Navigator>
    );
};