import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen';
import StackHeader from '../../components/StackHeader';

// create Stack navigator:
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <StackHeader {...props} />,
        }}
      >
        {/* First Screen */}
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            header: props => <StackHeader {...props} />,
          }}
        />
        {/* Second Screen */}
        <Stack.Screen
          name={'signup'}
          options={{
            title: 'Sign up',
          }}
          component={SignupScreen}
        />
        {/* Profile Screen */}
        <Stack.Screen
          name={'profile'}
          options={{
            title: 'Profile Screen',
          }}
          component={ProfileScreen}
        />
        {/* Home Screen */}
        <Stack.Screen
          name={'home'}
          options={{
            title: 'Home Screen',
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

/**
 * Create Stack Navigator
 * Navigation Container Will wrap the Navigators
 * Then For dynamic Stack Navigator use Stack.Navigator and Stack.Screen
 *
 * Those
 */
