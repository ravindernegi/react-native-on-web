import React from 'react';
import { StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
  header: { backgroundColor: '#2ecc71', padding: 20, color: '#fff' },
});
function Header() {
  return <View style={styles.header}>Header</View>;
}
export default Header;
