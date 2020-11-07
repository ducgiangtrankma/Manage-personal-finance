import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import PropTypes from 'prop-types';
export default function Back(props) {
  const {onPress, containerStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <AntDesign name="left" size={18} color="black" />
    </TouchableOpacity>
  );
}
Back.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};
Back.defaultProps = {
  containerStyle: {},
  onPress: () => {},
};
