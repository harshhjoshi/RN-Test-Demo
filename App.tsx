import React, { useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoginScreen from './source/Screens/Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import { colors } from './source/styles/variables';

const RootStack = createStackNavigator();

const options = {
  headerShown: false,
};

const App = () => {

  useEffect(()=>{
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  },[])

  const GetStarted = () => (
    <RootStack.Navigator screenOptions={options}>
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    </RootStack.Navigator>
  );
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
      <RootStack.Navigator screenOptions={options}>
        <RootStack.Screen name="GetStarted" component={GetStarted} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
