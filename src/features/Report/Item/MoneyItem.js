import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
export default function MoneyItem(props) {
  const {title, value, containerStyle} = props;
  return (
    <View style={[styles.contentLine, containerStyle]}>
      <Text style={styles.tilte}>{title}</Text>
      <Text numberOfLines={1} style={styles.money}>
        {value}
      </Text>
    </View>
  );
}
MoneyItem.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  value: PropTypes.any,
};
MoneyItem.defaultProps = {
  containerStyle: {},
  title: 'Title',
  value: 0,
};
const styles = StyleSheet.create({
  contentLine: {
    flex: 1,
    marginRight: 3,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  tilte: {
    marginTop: -8,
    marginLeft: 20,
    backgroundColor: 'white',
    fontSize: 16,
  },
  money: {alignSelf: 'flex-start', fontSize: 18, marginLeft: 20},
});
