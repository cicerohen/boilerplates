import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar} from 'react-native';

import MainScreen from './screens/MainScreen';
import AuthScreen from './screens/AuthScreen';

import {AuthProvider} from './contexts/Auth';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <AuthProvider>
      <StatusBar animated />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppContainer;
