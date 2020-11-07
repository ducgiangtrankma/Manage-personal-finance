import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
export default function Header(props) {
  const {
    style,
    styleLeft,
    styleContent,
    styleRight,
    title,
    onPressLeft,
    onPressRight,
    renderLeft,
    renderRight,
    barStyle,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[styles.contentLeft, styleLeft]}
          onPress={onPressLeft}>
          {renderLeft()}
        </TouchableOpacity>
      </View>
      <View style={[styles.contentCenter, styleContent]}>
        <Text headline numberOfLines={1} style={styles.fontSizeContent}>
          {' '}
          {title}
        </Text>
      </View>
      <View style={[styles.right]}>
        <TouchableOpacity
          style={[styles.contentRight, styleRight]}
          onPress={onPressRight}>
          {renderRight()}
        </TouchableOpacity>
      </View>
    </View>
  );
}
Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleContent: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  barStyle: PropTypes.string,
};

Header.defaultProps = {
  style: {},
  styleLeft: {},
  styleContent: {},
  styleRight: {},
  title: 'Title',
  onPressLeft: () => {},
  onPressRight: () => {},
  renderLeft: () => {},
  renderRight: () => {},
  barStyle: '',
};
