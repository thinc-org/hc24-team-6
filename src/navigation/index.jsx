import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import AllEventScreen from '../screens/AllEvnetScreen';

const stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='AllEvent' screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Event" component={EventScreen} />
        <stack.Screen name="AllEvent" component={AllEventScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation;