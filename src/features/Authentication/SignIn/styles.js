import {StyleSheet} from 'react-native';
import {verticalScale, scale} from 'react-native-size-matters';
import {BaseColor} from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.whiite_background,
  },
  image1: {
    marginTop: verticalScale(46),
    position: 'absolute',
  },
  image2: {
    marginTop: verticalScale(157),
    marginLeft: scale(148),
    position: 'absolute',
  },
  image3: {
    marginTop: verticalScale(185),
    marginLeft: scale(268),
    position: 'absolute',
  },
  image4: {
    marginTop: verticalScale(221),
    marginLeft: scale(68),
    position: 'absolute',
  },
  image5: {
    marginTop: verticalScale(272),
    marginLeft: scale(96),
    position: 'absolute',
  },
  image6: {
    marginTop: verticalScale(292),
    marginLeft: scale(242),
    position: 'absolute',
  },
  btn: {
    //marginLeft: scale(13),
    marginTop: verticalScale(39),
    alignSelf: 'center',
    backgroundColor: BaseColor.blue,
    width: '87%',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(18),
    flexDirection: 'row',
  },
  textOption: {
    marginTop: verticalScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(19),
    marginBottom: verticalScale(52),
  },
  btnSocial: {
    paddingHorizontal: scale(8),
    backgroundColor: '#FFFFFF',
    height: verticalScale(32),
    width: scale(122),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
  },
  txtSignUp: {
    marginRight: 3,
    textDecorationLine: 'underline',
    color: BaseColor.grayText,
  },
});
