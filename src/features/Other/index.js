import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
export default function Other({props, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Other screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.replace('Auth');
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
