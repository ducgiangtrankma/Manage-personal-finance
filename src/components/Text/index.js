//Sử dụng khi app chỉ thay đổi fontsize và fonts. Không thay đổi ngôn ngữ
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
function TextComponent(props) {
  const percentFontSize = useSelector((state) => state.fontsSizeReducer)
    .sizeScale;
  // const defaultFontFamily = useSelector(
  //   (state) => state.fontFamilyReducer.defaultFontFamily,
  // );
  const {style, fontSize, ...rest} = props;
  return (
    <Text
      style={[
        styles.container,
        style,
        {
          fontSize: fontSize * percentFontSize,
          //  fontFamily: defaultFontFamily
        },
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#000',
  },
});

TextComponent.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontSize: PropTypes.number,
};

TextComponent.defaultProps = {
  style: {},
  fontSize: 13,
};

export default TextComponent;
