// Header.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3498db', // Set your preferred background color
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff', // Set your preferred text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
