import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
export default function Button(props) {
  const {title, containerStyle, containerStyleTitle, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.title, containerStyleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}
Button.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyleTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  containerStyle: {},
  containerStyleTitle: {},
  onPress: () => {},
  title: 'Button',
};
