import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photo Browser</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    margin: 10,
    fontWeight: '700',
    color: 'royalblue',
  },
});
