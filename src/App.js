import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFEA',
    flex: 1,
  },
  header: { backgroundColor: '#2ecc71', padding: 20, color: '#fff' },
  footer: { backgroundColor: '#4C4D4C', padding: 20, color: '#fff' },
  row: { flex: 1, flexDirection: 'row' },
  col: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#ddd',
    shadowOffset: 3,
    shadowOpacity: 1,
  },
});
function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>Tes</View>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                margin: 30,
              }}
            >
              1
            </Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>
            <Text
              style={{
                color: '#fff',
                margin: 30,
              }}
            >
              2
            </Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                margin: 30,
              }}
            >
              3
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>Tes</View>
    </View>
  );
}
export default App;
