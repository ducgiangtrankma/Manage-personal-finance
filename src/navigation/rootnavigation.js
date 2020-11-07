import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';
import TabCustom from './tabnavigation';
import {Auth} from './stacknavigation';
import {useDispatch} from 'react-redux';
import {setStatusConnect} from '../redux/action';
/*---Screen---*/
import Category from '../features/Category';
const Stack = createStackNavigator();
export default function RootNavigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.addEventListener((state) => {
        dispatch(setStatusConnect(state.isConnected));
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Main" component={TabCustom} />
        <Stack.Screen name="ListCategory" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
