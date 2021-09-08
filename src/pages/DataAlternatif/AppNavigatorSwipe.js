import React from 'react'
// import Ranking from './ranking'
import Utility from './Utility'
import DataAlternatif from '.'
import Ranking from './ranking'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

    function AppNavigatorAlternatif() {
        return (
            <Tab.Navigator>
            {/* <Tab.Screen name="Ranking" component={Ranking} /> */}
            <Tab.Screen name="Data Alternatif" component={DataAlternatif} />
            <Tab.Screen name="Utility" component={Utility} />
            </Tab.Navigator>
        );
    }

export default AppNavigatorAlternatif