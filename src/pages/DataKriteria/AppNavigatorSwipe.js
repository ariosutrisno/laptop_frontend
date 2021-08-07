import React from 'react'

import datanormalisasi from './datanormalisasi'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DataKriteria from '.'

const Tab = createMaterialTopTabNavigator();

    function AppNavigator() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Data Kriteria" component={DataKriteria} />
            <Tab.Screen name="Data Normalisasi" component={datanormalisasi} />
            </Tab.Navigator>
        );
    }

export default AppNavigator