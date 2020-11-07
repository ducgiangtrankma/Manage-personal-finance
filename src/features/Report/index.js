import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
export default function Report(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Report Screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
