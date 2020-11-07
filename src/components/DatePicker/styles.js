import {StyleSheet} from 'react-native';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: '100%',
    marginHorizontal: 20,
    backgroundColor: 'green',
  },
  title: {
    marginTop: -10,
    position: 'absolute',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  content: {
    marginTop: 15,
    marginLeft: 20,
    flexDirection: 'row',
  },
  bgrInput: {
    backgroundColor: BaseColor.blueOpacity,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDate: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '400',
  },
});
