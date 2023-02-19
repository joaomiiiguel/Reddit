import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RootStackParamList, RootTabParamList} from './Models/News';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import {Provider} from 'mobx-react';
import stores from './Score';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootTabParamList>();

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="new"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 10},
      }}>
      <Tab.Screen name="new" component={HomeScreen} />
      <Tab.Screen name="top" component={HomeScreen} />
      <Tab.Screen name="best" component={HomeScreen} />
      <Tab.Screen name="hot" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Provider {...stores}>
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
    </Provider>
  );
}
