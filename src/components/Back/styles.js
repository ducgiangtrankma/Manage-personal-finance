import {StyleSheet} from 'react-native';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: BaseColor.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
