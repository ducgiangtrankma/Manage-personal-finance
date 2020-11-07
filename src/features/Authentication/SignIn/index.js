import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
export default function SignIn({props, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.replace('Main');
        }}>
        <Text>Sign Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SigUp');
        }}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPass');
        }}>
        <Text>ForgotPass</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
