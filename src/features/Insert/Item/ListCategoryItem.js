import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {BaseColor} from '../../../theme';
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
