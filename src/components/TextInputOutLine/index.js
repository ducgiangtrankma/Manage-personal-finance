import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {BaseColor} from '../../theme';
export default function Index(props) {
  const {
    label,
    placeholder,
    renderLeft,
    renderRight,
    value,
    onChangeText,
    style,
    selectionColor,
    focusBorderColor,
    secureTextEntry,
  } = props;
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      mode="outlined"
      style={[styles.inputContainerStyle, style]}
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={(outlinedLargeText) => onChangeText(outlinedLargeText)}
      left={renderLeft}
      right={renderRight}
      underlineColor="red"
      selectionColor={selectionColor}
      clearTextOnFocus={true}
      theme={{
        colors: {
          primary: focusBorderColor,
        },
      }}
    />
  );
}
Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  onChangeText: PropTypes.func,
  selectionColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};
Index.defaultProps = {
  style: {},
  label: 'Label',
  placeholder: '',
  renderLeft: () => {},
  renderRight: () => {},
  onChangeText: () => {},
  selectionColor: BaseColor.blue,
  focusBorderColor: BaseColor.blue,
  secureTextEntry: false,
};
