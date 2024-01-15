import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfilScreen from '../screens/ProfilScreen';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
  <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} />
        </Tab.Navigator>
  </NavigationContainer>
  );
}
