// /components/ServiceOptions.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface ServiceOptionsProps {
  selectedServices: string[];
  onServiceSelection: (service: string, selected: boolean) => void;
}

const ServiceOptions: React.FC<ServiceOptionsProps> = ({ selectedServices, onServiceSelection }) => {
  const services = [
    'Basic Tune-Up',
    'Comprehensive Tune-Up',
    'Flat Tire Repair',
    'Brake Servicing',
    'Gear Servicing',
    'Chain Servicing',
    'Frame Repair',
    'Safety Check',
    'Accessory Install',
  ];

  return (
    <View>
      <Text>Select Service Options</Text>
      {services.map((service) => (
        <View key={service} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={selectedServices.includes(service) ? 'checked' : 'unchecked'}
            onPress={() => onServiceSelection(service, !selectedServices.includes(service))}
          />
          <Text>{service}</Text>
        </View>
      ))}
    </View>
  );
};

export default ServiceOptions;
