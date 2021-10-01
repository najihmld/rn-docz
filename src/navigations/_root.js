import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth-stack';
import LoginScreen from '../screens/auth/login';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
