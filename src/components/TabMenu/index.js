import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import {BaseColor} from '../../theme';
import {styles} from './styles';
const data = [
  {
    id: 1,
    title: 'Tab 1',
  },
  {
    id: 2,
    title: 'Tab 2',
  },
];
export default function TabMenu(props) {
  const {onPressMenu, menuId, listMenu, containerStyles} = props;
  return (
    <View style={[styles.container, containerStyles]}>
      {listMenu.map((e) => {
        return (
          <View
            key={e.id}
            style={[
              styles.tab,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderBottomColor:
                  menuId === e.id ? BaseColor.blue : BaseColor.gray,
                borderBottomWidth: 1.5,
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                onPressMenu(e);
              }}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  color: menuId === e.id ? BaseColor.blue : BaseColor.black,
                }}>
                {e.title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
TabMenu.propTypes = {
  onPressMenu: PropTypes.func,
  listMenu: PropTypes.array,
  menuId: PropTypes.number,
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
TabMenu.defaultProps = {
  onPressMenu: () => {},
  listMenu: data,
  menuId: 1,
  containerStyles: {},
};
