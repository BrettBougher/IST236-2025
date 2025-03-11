import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button, ImageBackground } from 'react-native';
import { RadioButton, Checkbox, Switch } from 'react-native-paper';
import Title from '../components/Title';
import NavigationButton from '../components/NavigationButton';
import ServiceTimes from '../components/ServiceTimes';
import ServiceOptions from '../components/ServiceOptions';
import NewsletterSwitch from '../components/NewsletterSwitch';
import RentalSwitch from '../components/RentalSwitch';
import { OrderDetails } from '../types';

interface HomeScreenProps {
  handleSubmitOrder: (order: OrderDetails) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ handleSubmitOrder }) => {
  const [serviceTime, setServiceTime] = useState<'standard' | 'expedited' | 'next-day'>('standard');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [rentalMembership, setRentalMembership] = useState<boolean>(false);

  const handleServiceTimeChange = (value: 'standard' | 'expedited' | 'next-day') => {
    setServiceTime(value);
  };

  const handleServiceSelection = (service: string, selected: boolean) => {
    setSelectedServices((prev) => {
      if (selected) return [...prev, service];
      return prev.filter((item) => item !== service);
    });
  };

  const handleSubmit = () => {
    const order: OrderDetails = {
      serviceTime,
      selectedServices,
      newsletter,
      rentalMembership,
    };
    handleSubmitOrder(order);
  };

  return (
    <ImageBackground source={require('../assets/home-background.jpg')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title title="Bicycle Repair Shop" />
        
        <ServiceTimes serviceTime={serviceTime} onServiceTimeChange={handleServiceTimeChange} />
        <ServiceOptions selectedServices={selectedServices} onServiceSelection={handleServiceSelection} />
        <NewsletterSwitch isChecked={newsletter} onToggle={setNewsletter} />
        <RentalSwitch isChecked={rentalMembership} onToggle={setRentalMembership} />

        <Button title="Submit Order" onPress={handleSubmit} />
      </ScrollView>
      <NavigationButton title="Go to Order Review" to="OrderReview" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    padding: 16,
  },
});

export default HomeScreen;
