// /components/RentalSwitch.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

interface RentalSwitchProps {
  isChecked: boolean;
  onToggle: (value: boolean) => void;
}

const RentalSwitch: React.FC<RentalSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <View>
      <Text>Rental Membership</Text>
      <Switch value={isChecked} onValueChange={onToggle} />
    </View>
  );
};

export default RentalSwitch;
