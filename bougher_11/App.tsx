// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookmarksProvider } from './context/bookmarks-context';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import SportsNewsScreen from './screens/SportsNewsScreen'; // Or another topic of choice
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="US News" component={USNewsScreen} />
      <Tab.Screen name="World News" component={WorldNewsScreen} />
      <Tab.Screen name="Sports News" component={SportsNewsScreen} />
    </Tab.Navigator>
  );
};

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="News" component={TabNavigator} />
      <Drawer.Screen name="Bookmarks" component={BookmarkedNewsScreen} />
    </Drawer.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <BookmarksProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookmarksProvider>
  );
};

export default App;
