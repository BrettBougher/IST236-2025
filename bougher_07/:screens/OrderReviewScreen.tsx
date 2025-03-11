import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { OrderDetails } from '../types';
import { calculateTotal } from '../utils/calculator';
import Title from '../components/Title';
import NavigationButton from '../components/NavigationButton';

interface OrderReviewScreenProps {
  orderDetails: OrderDetails | null;
}

const OrderReviewScreen: React.FC<OrderReviewScreenProps> = ({ orderDetails }) => {
  if (!orderDetails) return null;

  const { serviceTime, selectedServices, newsletter, rentalMembership } = orderDetails;
  const subtotal = calculateTotal(serviceTime, selectedServices, newsletter, rentalMembership);
  const salesTax = subtotal * 0.06;
  const finalTotal = subtotal + salesTax;

  return (
    <View style={styles.container}>
      <Title title="Order Review" />
      
      <Text>Service Time: {serviceTime}</Text>
      <Text>Selected Services:</Text>
      {selectedServices.map((service, index) => (
        <Text key={index}>{service}</Text>
      ))}
      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text>Sales Tax (6%): ${salesTax.toFixed(2)}</Text>
      <Text>Total: ${finalTotal.toFixed(2)}</Text>

      <NavigationButton title="Return Home" to="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default OrderReviewScreen;
