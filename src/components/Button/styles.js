import {StyleSheet} from 'react-native';
import {scWidth} from '../../constants';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: scWidth * 0.6,
    borderRadius: 10,
    backgroundColor: BaseColor.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: BaseColor.black,
  },
});
