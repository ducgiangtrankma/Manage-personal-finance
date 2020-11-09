import {StyleSheet} from 'react-native';
import {scWidth} from '../../../constants';
import {BaseColor} from '../../../theme';
const widthItem = (scWidth - 25) / 3;
export const styles = StyleSheet.create({
  container: {
    height: widthItem * 0.5,
    width: widthItem,
    borderColor: BaseColor.gray,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
