import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ReserveNowButtonProps {
  onPress: () => void;
}

const ReserveNowButton: React.FC<ReserveNowButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Reserve Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReserveNowButton;
