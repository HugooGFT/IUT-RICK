import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfilScreen from '../screens/ProfilScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from '../components/DetailsScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack =() => {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
  <NavigationContainer>

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else if (route.name === 'Profil') {
              iconName = 'person-outline';
            }

            // Renvoie l'icône
            return <Ionicons name={iconName} size={size} color={color} />;
          }, 
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray"
        })}
        >
        
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} />
        </Tab.Navigator>
  </NavigationContainer>
  );
}
