// /components/ServiceTimes.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface ServiceTimesProps {
  serviceTime: 'standard' | 'expedited' | 'next-day';
  onServiceTimeChange: (value: 'standard' | 'expedited' | 'next-day') => void;
}

const ServiceTimes: React.FC<ServiceTimesProps> = ({ serviceTime, onServiceTimeChange }) => {
  return (
    <View>
      <Text>Service Time</Text>
      <RadioButton.Group onValueChange={onServiceTimeChange} value={serviceTime}>
        <View>
          <Text>Standard ($0)</Text>
          <RadioButton value="standard" />
        </View>
        <View>
          <Text>Expedited ($50)</Text>
          <RadioButton value="expedited" />
        </View>
        <View>
          <Text>Next Day ($100)</Text>
          <RadioButton value="next-day" />
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default ServiceTimes;
