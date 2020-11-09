import {StyleSheet} from 'react-native';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.white,
  },
  content: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: BaseColor.blueOpacity,
    marginTop: 10,
  },
  showData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daySelect: {
    fontSize: 18,
    color: BaseColor.blue,
    marginLeft: 18,
    marginVertical: 10,
  },
});
