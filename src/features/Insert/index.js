import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Back, Button, DatePicker, TabMenu} from '../../components';
import moment from 'moment';
export default function Insert({props, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Inser screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListCategory');
        }}>
        <Text>Go to list category</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
  },
});
