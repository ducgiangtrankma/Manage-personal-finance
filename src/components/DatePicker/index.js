import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function DatePicker(props) {
  const {
    isDatePickerVisible,
    mode,
    handleConfirm,
    hideDatePicker,
    title,
    dateSelect,
    fomatTime,
  } = props;
  return (
    <View style={styles.input}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={{flex: 4}}>
          {dateSelect === null
            ? '-------------'
            : moment(dateSelect).format(fomatTime)}
        </Text>
        <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
          <Fontisto name="date" size={18} />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="vi"
        headerTextIOS="Chọn thời gian"
        cancelTextIOS="Huỷ"
        confirmTextIOS="Xác nhận"
      />
    </View>
  );
}
DatePicker.propTypes = {
  isDatePickerVisible: PropTypes.bool,
  mode: PropTypes.string,
  handleConfirm: PropTypes.func,
  hideDatePicker: PropTypes.func,
  title: PropTypes.string,
  dateSelect: PropTypes.any,
  fomatTime: PropTypes.string,
};
DatePicker.defaultProps = {
  isDatePickerVisible: false,
  mode: 'date',
  handleConfirm: () => {},
  hideDatePicker: () => {},
  title: 'Tiêu đề',
  dateSelect: null,
  fomatTime: 'DD/MM/YYYY, hh:mm:ss',
};
