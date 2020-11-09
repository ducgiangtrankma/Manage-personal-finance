import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import ItemList from './Items/ItemList';
LocaleConfig.locales.vi = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6.', 'T7'],
};
LocaleConfig.defaultLocale = 'vi';
export default function CalendarSc({props, navigation}) {
  const dateNow = new Date();
  const [dateSelect, setDateSelect] = useState(dateNow);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDateSelect(dateNow);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  const renderItem = ({item, index}) => {
    return <ItemList item={item} index={index} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        markedDates={{
          [dateSelect]: {selected: true, marked: true, selectedColor: 'blue'},
        }}
        onDayPress={(day) => {
          setDateSelect(day.dateString);
          console.log('Day select', day);
        }}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideArrows={false} // next - back month

        //renderArrow={(direction) => (<Arrow/>)} // custom back - next month
      />
      <View style={styles.content}>
        <View style={styles.showData}>
          <Text>Thu nhập</Text>
          <Text>1.000.000đ</Text>
        </View>
        <View style={styles.showData}>
          <Text>Chi tiêu</Text>
          <Text>1.000.000đ</Text>
        </View>
        <View style={styles.showData}>
          <Text>Tổng</Text>
          <Text>1.000.000đ</Text>
        </View>
      </View>

      <Text style={styles.daySelect}>
        Ngày: {moment(dateSelect).format('DD-MM-YYYY')}
      </Text>

      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  );
}
const dataList = [
  {
    id: 1,
    content: 'Dữ liệu 1',
    total: '500.000',
    note: 'Ghi chú',
  },
  {
    id: 2,
    content: 'Dữ liệu 2',
    total: '500.000',
    note: 'Ghi chú',
  },
  {
    id: 3,
    content: 'Dữ liệu 3',
    total: '500.000',
    note: 'Ghi chú',
  },
];
