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
import {BaseColor} from '../../theme';
import Feather from 'react-native-vector-icons/Feather';
import MoneyItem from './Item/MoneyItem';
import {scale, verticalScale} from 'react-native-size-matters';
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
            //containerStyles={styles.tabmenu}
            menuId={menuTop}
            onPressMenu={(item) => {
              setMenuTop(item.id);
            }}
          />
        </View>
        <View style={styles.rightHeader} />
      </View>
      <View style={[styles.lineTop, styles.lineMonth]}>
        <TouchableOpacity style={styles.leftMoth} onPress={() => {}}>
          <Feather name="chevron-left" size={28} />
        </TouchableOpacity>
        <View style={styles.centerMonth}>
          <Text style={{fontSize: 18, letterSpacing: 2}}>11/2020</Text>
          <Text>(01/11 - 30/11)</Text>
        </View>
        <TouchableOpacity style={styles.leftMoth} onPress={() => {}}>
          <Feather name="chevron-right" size={28} />
        </TouchableOpacity>
      </View>
      <View style={[styles.lineTop, {marginTop: 20}]}>
        <MoneyItem title="Chi tiêu" />
        <MoneyItem title="Thu nhập" />
      </View>
      <View style={styles.lineTop}>
        <View style={styles.fullLine} />
      </View>
      <View style={[styles.lineTop, {marginTop: 20}]}>
        <MoneyItem title="Số dư đầu kì" />
        <MoneyItem title="Số dư cuối kì" />
      </View>
      {/* <View style={{flex: 1}} /> */}
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
    percentage: 10,
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
    percentage: 20,
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
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    height: verticalScale(40),
    marginBottom: verticalScale(10),
  },
  leftHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(5),
  },
  menu: {flex: 6},
  rightHeader: {flex: 1},
  main: {
    flex: 1,
    marginTop: verticalScale(20),
  },
  lineTop: {
    minHeight: verticalScale(45),
    width: '100%',
    marginVertical: 2,
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  lineMonth: {
    flexDirection: 'row',
  },
  leftMoth: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerMonth: {
    flex: 1,
    backgroundColor: BaseColor.blueOpacity,
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentLine: {
    flex: 1,
    marginRight: scale(3),
    marginLeft: scale(5),
    borderRadius: scale(10),
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
  fullLine: {
    flex: 1,
    marginHorizontal: scale(5),
    borderRadius: scale(10),
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
  tabmenu: {
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
});
