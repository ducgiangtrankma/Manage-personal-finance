import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {scWidth} from '../../../constants';
import {BaseColor} from '../../../theme';
const widthItem = (scWidth - 25) / 3;
export const styles = StyleSheet.create({
  container: {
    height: widthItem * 0.5,
    width: widthItem,
    borderColor: BaseColor.gray,
    borderWidth: 1,
    marginLeft: scale(6),
    borderRadius: scale(10),
    marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
