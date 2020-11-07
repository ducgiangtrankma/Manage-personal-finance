import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Back} from '../../components';
export default function Category({props, navigation}) {
  return (
    <SafeAreaView>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>List category</Text>
    </SafeAreaView>
  );
}
