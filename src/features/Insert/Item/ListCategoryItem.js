import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scWidth} from '../../../constants';
import {BaseColor} from '../../../theme';
import PropTypes from 'prop-types';
const widthItem = (scWidth - 25) / 3;
export default function ItemCategroy(props) {
  const {item, onPressItem, color} = props;
  return (
    <TouchableOpacity
      style={[styles.container, {borderColor: color}]}
      onPress={onPressItem}>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );
}
ItemCategroy.propsType = {
  item: PropTypes.object,
  onPressItem: PropTypes.func,
  color: PropTypes.string,
};
ItemCategroy.defaultProps = {
  item: {},
  onPressItem: () => {},
  color: BaseColor.red,
};
const styles = StyleSheet.create({
  container: {
    height: widthItem * 0.5,
    width: widthItem,
    borderColor: BaseColor.gray,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
