import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFEA',
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});
function MainLayout(props) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.flex}>{props.children}</View>
      <Footer />
    </View>
  );
}
export default MainLayout;
