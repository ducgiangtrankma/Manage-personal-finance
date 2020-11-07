/*------Example Componet using ---------*/
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Back, Button, DatePicker, TabMenu} from './index';
import moment from 'moment';
export default function Example(props) {
  const [dateSelect, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [menuId, setMenuId] = useState(1);
  const handleConfirm = (date) => {
    console.warn(
      'A date has been picked: ',
      moment(date).format('DD/MM/YYYY, hh:mm:ss'),
    );
    setDate(date);
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const onPressMenu = (item) => {
    setMenuId(item.id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Back />
      <Button />
      <TouchableOpacity
        onPress={() => {
          setDatePickerVisibility(true);
        }}>
        <DatePicker
          dateSelect={dateSelect}
          isDatePickerVisible={isDatePickerVisible}
          handleConfirm={handleConfirm}
          hideDatePicker={hideDatePicker}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignItems: 'flex-end', marginRight: 20, marginTop: 10}}
        onPress={() => {
          setDate(null);
        }}>
        <Text>Reset DateTimePicker</Text>
      </TouchableOpacity>
      <TabMenu
        menuId={menuId}
        onPressMenu={(item) => {
          onPressMenu(item);
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
  },
  input: {
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 20,
  },
  title: {
    marginTop: -10,
    position: 'absolute',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  content: {
    marginTop: 15,
    marginLeft: 20,
    flexDirection: 'row',
  },
});
