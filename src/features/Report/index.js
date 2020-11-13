import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabMenu, PieChart} from '../../components';
export default function Report(props) {
  const [menuTop, setMenuTop] = useState(1);
  const [menuBottom, setMenuBottom] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.leftHeader} onPress={() => {}}>
          <Image source={require('../../assets/images/screenshot.png')} />
        </TouchableOpacity>
        <View style={styles.menu}>
          <TabMenu
            listMenu={topMenu}
            containerStyles={styles.tabmenu}
            menuId={menuTop}
            onPressMenu={(item) => {
              setMenuTop(item.id);
            }}
          />
        </View>
        <View style={styles.rightHeader} />
      </View>
      <View style={{flex: 1}} />
      <View style={styles.main}>
        <TabMenu
          listMenu={bottom}
          containerStyles={styles.tabmenu}
          menuId={menuBottom}
          onPressMenu={(item) => {
            setMenuBottom(item.id);
          }}
        />
        <PieChart data={data} />
      </View>
    </SafeAreaView>
  );
}
const topMenu = [
  {
    id: 1,
    title: 'Hàng tháng',
  },
  {
    id: 2,
    title: 'Hàng năm',
  },
];
const bottom = [
  {
    id: 1,
    title: 'Chi tiêu',
  },
  {
    id: 2,
    title: 'Thu nhập',
  },
];
const data = [
  {
    id: 0,
    percentage: 10,
    color: '#C70039',
    category: 'Chi tiêu 1',
    money: '200.000',
  },
  {
    id: 1,
    percentage: 20,
    color: '#44CD40',
    category: 'Chi tiêu 2',
    money: '200.000',
  },
  {
    id: 2,
    percentage: 20,
    color: '#404FCD',
    category: 'Chi tiêu 3',
    money: '200.000',
  },
  {
    id: 3,
    percentage: 20,
    color: '#FFB553',
    category: 'Chi tiêu 4',
    money: '200.000',
  },
  {
    id: 4,
    percentage: 10,
    color: '#8BC2DE',
    category: 'Chi tiêu 5',
    money: '200.000',
  },
  {
    id: 5,
    percentage: 20,
    color: '#ABD82F',
    category: 'Chi tiêu 5',
    money: '200.000',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 40,
  },
  leftHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  menu: {flex: 6},
  rightHeader: {flex: 1},
  main: {
    flex: 2,
  },
});
