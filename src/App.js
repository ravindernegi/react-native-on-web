import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ecc71',
    flex: 1,
  },
  block: {
    /* flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around',
    flexWrap: 'wrap',*/
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
function App() {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View
          style={{
            backgroundColor: 'blue',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius:8,
            shadowColor:'#ddd' ,
            shadowOffset:3,
            shadowOpacity:1.

          }}>
          <Text
            style={{
              textAlign: 'center',
              color:'#fff',
              margin:30,
            }}>
            Button
          </Text>
        </View>
      </View>
    </View>
  );
}

export default App;
