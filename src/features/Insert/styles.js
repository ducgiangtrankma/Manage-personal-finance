import {StyleSheet} from 'react-native';
import {BaseColor} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabmenu: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 10,
  },
  lineInput: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BaseColor.gray,
    marginBottom: 10,
  },
  leftLine: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  rightLine: {
    flex: 4,
    justifyContent: 'center',
  },
  txtLeftLine: {
    fontSize: 16,
  },
  bgrInput: {
    backgroundColor: BaseColor.blueOpacity,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputNote_Money: {
    flex: 1,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  btn: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: BaseColor.blue,
    marginTop: 20,
    marginBottom: 50,
  },
});
