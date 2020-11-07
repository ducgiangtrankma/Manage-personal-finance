import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {InsertTab, ReportTab, CalendarTab, OtherTab} from './stacknavigation';
/*-----------Setting TabNavigation-----------*/
const Tab = createBottomTabNavigator();
const TabCustom = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{showIcon: true, labelStyle: {fontSize: 9}}}>
      <Tab.Screen
        name="Nhập vào"
        component={InsertTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <EvilIcons name="pencil" size={28} color={'#2F80ED'} />;
            } else {
              return <EvilIcons name="pencil" size={28} color={'gray'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Lịch"
        component={CalendarTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <AntDesign name="calendar" size={20} color={'#2F80ED'} />;
            } else {
              return <AntDesign name="calendar" size={20} color={'gray'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Báo cáo"
        component={ReportTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <Feather name="pie-chart" size={20} color={'#2F80ED'} />;
            } else {
              return <Feather name="pie-chart" size={20} color={'gray'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Mở rộng"
        component={OtherTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return (
                <Entypo
                  name="dots-three-horizontal"
                  size={20}
                  color={'#2F80ED'}
                />
              );
            } else {
              return (
                <Entypo name="dots-three-horizontal" size={20} color={'gray'} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabCustom;
