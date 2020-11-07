import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
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
  const {onPressMenu, menuId, listMenu} = props;
  return (
    <View style={styles.container}>
      {listMenu.map((e) => {
        return (
          <View
            key={e.id}
            style={[
              styles.tab,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderBottomColor: menuId === e.id ? 'red' : 'transparent',
                borderBottomWidth: 1,
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                onPressMenu(e);
              }}>
              <Text>{e.title}</Text>
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
};
TabMenu.defaultProps = {
  onPressMenu: () => {},
  listMenu: data,
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    height: 40,
    //backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
