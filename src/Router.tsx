import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
export type RootTabParamList = {
  New: undefined;
  Top: undefined;
  Popular: undefined;
  Hot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootTabParamList>();

export function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="New" component={HomeScreen} />
      <Tab.Screen name="Top" component={HomeScreen} />
      <Tab.Screen name="Popular" component={HomeScreen} />
      <Tab.Screen name="Hot" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{title: 'reddit/r/pics'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
