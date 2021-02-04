import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';
const styles = StyleSheet.create({
  row: { flex: 1, flexDirection: 'row' },
  col: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    borderRadius: 8,
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: 20,
    fontSize: '3em',
  },
  button: {
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#ddd',
    shadowOffset: 3,
    shadowOpacity: 1,
    color: '#fff',
    padding: 20,
  },
});

function Banner() {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.banner}>Hello ReactNative</Text>
      </View>
    </View>
  );
}
function App() {
  return (
    <MainLayout>
      <Banner />
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.button}>1</Text>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>2</View>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>3</View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.button}>1</Text>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>2</View>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>3</View>
        </View>
      </View>
    </MainLayout>
  );
}
export default App;
