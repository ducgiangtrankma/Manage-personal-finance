import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {BaseColor} from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(50),
    borderBottomWidth: 1,
    borderBottomColor: BaseColor.gray,
    alignItems: 'center',
  },
  contentLeft: {
    flex: 1,
    paddingLeft: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentRight: {
    flex: 1,
    paddingRight: scale(20),
    alignItems: 'flex-end',
  },
  note: {fontSize: 12, marginLeft: scale(5)},
});
