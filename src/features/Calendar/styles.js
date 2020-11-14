import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.white,
  },
  content: {
    flexDirection: 'row',
    height: verticalScale(50),
    backgroundColor: BaseColor.blueOpacity,
    marginTop: verticalScale(10),
  },
  showData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daySelect: {
    fontSize: 18,
    color: BaseColor.blue,
    marginLeft: scale(18),
    marginVertical: verticalScale(10),
  },
});
