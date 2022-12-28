import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseFont from './src/components/BaseFont';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BaseFont>
          Open up App.js to start <Text style={styles.bold}>working</Text> on your app!
        </BaseFont>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    color: 'yellow'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 50
  }
});
