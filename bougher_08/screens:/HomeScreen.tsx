import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Title from '../components/Title';
import ReserveNowButton from '../components/ReserveNowButton';
import { formatDate } from '../utils/dateUtils';

const HomeScreen: React.FC = () => {
  const [showCheckInPicker, setShowCheckInPicker] = useState<boolean>(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState<boolean>(false);
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<number>(1);
  const [campsites, setCampsites] = useState<number>(1);
  const [reservationDetails, setReservationDetails] = useState<null | {
    checkIn: string;
    checkOut: string;
    guests: number;
    campsites: number;
  }>(null);

  useEffect(() => {
    // Wait for fonts to load before rendering
    // Implement custom font loading logic here (e.g., using 'expo-font' or 'react-native-fonts')
  }, []);

  const handleCheckInChange = (event: Event, selectedDate?: Date | undefined) => {
    setShowCheckInPicker(false);
    if (selectedDate) setCheckInDate(selectedDate);
  };

  const handleCheckOutChange = (event: Event, selectedDate?: Date | undefined) => {
    setShowCheckOutPicker(false);
    if (selectedDate) setCheckOutDate(selectedDate);
  };

  const handleReserve = () => {
    setReservationDetails({
      checkIn: formatDate(checkInDate),
      checkOut: formatDate(checkOutDate),
      guests,
      campsites,
    });
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <Title campgroundName="Sunny Campsite" />

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => setShowCheckInPicker(true)}>
            <Text style={styles.dateText}>{`Check-in: ${formatDate(checkInDate)}`}</Text>
          </TouchableOpacity>
          {showCheckInPicker && (
            <DateTimePicker
              value={checkInDate}
              mode="date"
              display="default"
              onChange={handleCheckInChange}
            />
          )}

          <TouchableOpacity onPress={() => setShowCheckOutPicker(true)}>
            <Text style={styles.dateText}>{`Check-out: ${formatDate(checkOutDate)}`}</Text>
          </TouchableOpacity>
          {showCheckOutPicker && (
            <DateTimePicker
              value={checkOutDate}
              mode="date"
              display="default"
              onChange={handleCheckOutChange}
            />
          )}

          <TouchableOpacity onPress={() => setGuests(guests === 15 ? 1 : guests + 1)}>
            <Text style={styles.selectorText}>{`Guests: ${guests}`}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCampsites(campsites === 5 ? 1 : campsites + 1)}>
            <Text style={styles.selectorText}>{`Campsites: ${campsites}`}</Text>
          </TouchableOpacity>

          <ReserveNowButton onPress={handleReserve} />

          {reservationDetails && (
            <View style={styles.reservationSummary}>
              <Text style={styles.reservationText}>Reservation Details:</Text>
              <Text style={styles.reservationText}>{`Check-in: ${reservationDetails.checkIn}`}</Text>
              <Text style={styles.reservationText}>{`Check-out: ${reservationDetails.checkOut}`}</Text>
              <Text style={styles.reservationText}>{`Guests: ${reservationDetails.guests}`}</Text>
              <Text style={styles.reservationText}>{`Campsites: ${reservationDetails.campsites}`}</Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  selectorText: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  reservationSummary: {
    marginTop: 30,
    alignItems: 'center',
  },
  reservationText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
