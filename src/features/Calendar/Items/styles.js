import {StyleSheet} from 'react-native';
import {BaseColor} from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: BaseColor.gray,
    alignItems: 'center',
  },
  contentLeft: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentRight: {
    flex: 1,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  note: {fontSize: 12, marginLeft: 5},
});
