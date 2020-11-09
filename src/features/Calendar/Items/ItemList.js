import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseColor} from '../../../theme';
export default function ItemList(props) {
  const {item, index} = props;
  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        <Text>{item.content}</Text>
        <Text style={styles.note}>({item.note})</Text>
      </View>
      <View style={styles.contentRight}>
        <Text>{item.total}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: BaseColor.gray,
    alignItems: 'center',
  },
  contentLeft: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentRight: {
    flex: 1,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  note: {fontSize: 12, marginLeft: 5},
});
