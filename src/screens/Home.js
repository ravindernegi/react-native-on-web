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
    <MainLayout>
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
    </MainLayout>
  );
}
export default App;
