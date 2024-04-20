import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import AllEventScreen from '../screens/AllEvnetScreen';
import SignIn from '../screens/Login';
import Register from '../screens/Register';
import AdminHome from '../screens/HomeAdminScreen';
import Detail from '../screens/CreateEvent';


const stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='AllEvent' screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Event" component={EventScreen} />
        <stack.Screen name="AllEvent" component={AllEventScreen} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="AdminHome" component={AdminHome} />
        <stack.Screen name="Detail" component={Detail} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation;