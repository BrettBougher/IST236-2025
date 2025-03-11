import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';
import { OrderDetails } from './types';
import { calculateTotal } from './utils/calculator';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'custom-font': require('./assets/fonts/CustomFont.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSubmitOrder = (order: OrderDetails) => {
    setOrderDetails(order);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          children={(props) => <HomeScreen {...props} handleSubmitOrder={handleSubmitOrder} />}
        />
        <Stack.Screen
          name="OrderReview"
          children={(props) => <OrderReviewScreen {...props} orderDetails={orderDetails} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
