import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {Back} from '../../../components';
export default function SignUp({props, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>SignUp Screen</Text>
    </SafeAreaView>
  );
}
