import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../../Styles'
const Header = ({ title }) => {
  return (
      <View style={styles.header} >
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
  );
}

export default Header;