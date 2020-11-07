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
    dateSelect,
    fomatTime,
  } = props;
  return (
    <View style={styles.bgrInput}>
      <Text style={styles.txtDate}>
        {dateSelect === null
          ? '-------------'
          : moment(dateSelect).format(fomatTime)}
      </Text>
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
  fomatTime: 'DD/MM/YYYY',
};
