import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen, LoginWithOTPScreen,
} from '../screens';
import Drawer from './DrawerNavigationStack';

const MainStack = createStackNavigator();


const MainStackNavigation = () => {
    return (
        <MainStack.Navigator
            initialRouteName={'SplashScreen'}
        >
            <MainStack.Screen
                options={{ headerShown: false }}
                name='SplashScreen'
                component={SplashScreen}
            />
          
          <MainStack.Screen
                options={{ headerShown: false }}
                name='LoginWithOTPScreen'
                component={LoginWithOTPScreen}
            />
            <MainStack.Screen
                options={{ headerShown: false }}
                name='Drawer'
                component={Drawer}
            />

        </MainStack.Navigator>
    )
}

export default MainStackNavigation