/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {TabMenu, DatePicker, Button} from '../../components';
import moment from 'moment';
import {styles} from './styles';
import {BaseColor} from '../../theme';
import ListCategoryItem from './Item/ListCategoryItem';
const listmenu = [
  {
    id: 1,
    title: 'Tiền chi',
  },
  {
    id: 2,
    title: 'Tiền thu',
  },
];
export default function Insert({props, navigation}) {
  const dateNow = new Date();
  const [menu, setMenu] = useState(1);
  const [dateSelect, setDateSelect] = useState(moment(dateNow, 'DD/MM/YYYY'));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [indexCategory, setIndexCatergory] = useState(0);
  const handleConfirm = (date) => {
    setDateSelect(moment(date, 'DD/MM/YYYY'));
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const onPressItem = (item, index) => {
    console.log('index', index);
    setIndexCatergory(index);
  };
  const renderItem = ({item, index}) => {
    console.log(index);
    return (
      <ListCategoryItem
        item={item}
        index={index}
        onPressItem={() => {
          onPressItem(item, index);
        }}
        color={index === indexCategory ? BaseColor.blue : BaseColor.gray}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TabMenu
        listMenu={listmenu}
        containerStyles={styles.tabmenu}
        menuId={menu}
        onPressMenu={(item) => {
          setMenu(item.id);
        }}
      />
      <TouchableOpacity style={styles.lineInput}>
        <View style={styles.leftLine}>
          <Text style={styles.txtLeftLine}>Ngày</Text>
        </View>
        <View style={styles.rightLine}>
          <TouchableOpacity
            style={styles.bgrInput}
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
        </View>
      </TouchableOpacity>
      <View style={styles.lineInput}>
        <View style={styles.leftLine}>
          <Text style={styles.txtLeftLine}>Ghi chú</Text>
        </View>
        <View style={styles.rightLine}>
          <View style={styles.inputNote_Money}>
            <TextInput
              style={{
                // alignSelf: 'flex-start',
                fontSize: 16,
                flex: 1,
                alignSelf: 'stretch',
              }}
              placeholder="Chưa nhập vào"
            />
          </View>
        </View>
      </View>
      <View style={styles.lineInput}>
        <View style={styles.leftLine}>
          <Text style={styles.txtLeftLine}>
            {menu === 1 ? 'Tiền chi' : 'Tiền thu'}
          </Text>
        </View>
        <View style={styles.rightLine}>
          <View style={styles.inputNote_Money}>
            <TextInput
              keyboardType="number-pad"
              returnKeyType="done"
              style={{
                alignSelf: 'stretch',
                fontSize: 16,
                flex: 1,
              }}
              placeholder="Số tiền ..."
            />
          </View>
        </View>
      </View>
      <Text style={{marginLeft: 10, fontSize: 16}}>Danh mục: </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataFl}
        contentContainerStyle={{alignSelf: 'center'}}
        renderItem={renderItem}
        numColumns={3}
        style={{flexWrap: 'wrap'}}
        keyExtractor={(item, index) => `${index}`}
      />
      <Button
        containerStyleTitle={{color: BaseColor.white}}
        title={menu === 1 ? 'Nhập khoản chi' : 'Nhập khoản thu'}
        containerStyle={styles.btn}
      />
    </SafeAreaView>
  );
}

const dataFl = [
  {
    id: 1,
    content: '1',
  },
  {
    id: 2,
    content: '2',
  },
  {
    id: 3,
    content: '3',
  },
  {
    id: 4,
    content: '4',
  },
  {
    id: 5,
    content: '5',
  },
  {
    id: 6,
    content: '6',
  },
  {
    id: 7,
    content: '7',
  },
];
