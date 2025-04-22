// navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import USNews from '../screens/USNews';
import WorldNews from '../screens/WorldNews';
import SportsNews from '../screens/SportsNews';
import BookmarkNews from '../screens/BookmarkNews';
import NewsDetail from '../screens/NewsDetail';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="US News" component={USNews} />
    <Tab.Screen name="World News" component={WorldNews} />
    <Tab.Screen name="Sports News" component={SportsNews} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={TabNavigator} />
    <Drawer.Screen name="Bookmarked News" component={BookmarkNews} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Drawer">
    <Stack.Screen name="Drawer" component={DrawerNavigator} />
    <Stack.Screen name="NewsDetail" component={NewsDetail} />
  </Stack.Navigator>
);

export default AppNavigator;
