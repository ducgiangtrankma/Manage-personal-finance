import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Swipeout from 'react-native-swipeout';
export default function ItemList(props) {
  const {item, index} = props;
  const swipeSetting = {
    backgroundColor: 'white',
    autoClose: true,
    right: [
      {
        onPress: () => {
          console.log(item);
        },
        text: 'Xoá',
        type: 'delete',
      },
      {
        onPress: () => {
          console.log(item);
        },
        text: 'Sửa',
        type: 'edit',
      },
    ],
    rowID: index,
    sectionId: 1,
  };
  return (
    <Swipeout autoClose={true} {...swipeSetting}>
      <View style={styles.container}>
        <View style={styles.contentLeft}>
          <Text>{item.content}</Text>
          <Text style={styles.note}>({item.note})</Text>
        </View>
        <View style={styles.contentRight}>
          <Text>{item.total}</Text>
        </View>
      </View>
    </Swipeout>
  );
}
