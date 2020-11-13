import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Pie from 'react-native-pie';
import {BaseColor} from '../../theme';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function PieChart(props) {
  const {data} = props;
  const renderItem = () => {
    return data.map((e) => {
      return (
        <View
          key={e.id}
          style={[
            styles.lineContent,
            {backgroundColor: e.id % 2 === 0 ? BaseColor.blueOpacity : null},
          ]}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text>{e.category}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>{e.money}</Text>
            <Text style={{marginLeft: 20}}>20%</Text>
            <AntDesign
              name="right"
              size={18}
              color="black"
              style={{paddingLeft: 10}}
            />
          </View>
        </View>
      );
    });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.viewChart}>
        {data.length === 0 ? (
          <Text>Không có dữ liệu</Text>
        ) : (
          <Pie radius={80} sections={data} strokeCap={'butt'} />
        )}
      </View>
      <Text style={styles.title}>Biểu đồ thống kê</Text>
      <View style={styles.viewList}>{renderItem()}</View>
    </ScrollView>
  );
}
PieChart.propTypes = {
  data: PropTypes.array,
};

PieChart.defaultProps = {
  data: [],
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.white,
  },
  viewChart: {
    minHeight: 180,
    alignItems: 'center',
    marginTop: 10,
  },
  viewList: {
    flex: 1,
  },
  lineContent: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  title: {alignSelf: 'center', fontSize: 18, marginBottom: 20},
});
