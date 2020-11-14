import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {
  Image1Splash,
  Image2Splash,
  Image3Splash,
  Image4Splash,
  Image6Splash,
  Image5Splash,
} from '../../../assets/svg/Svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import {Button, TextInputOutLine} from '../../../components';
import {BaseColor} from '../../../theme';
export default function SignIn({props, navigation}) {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={20}
      contentContainerStyle={styles.container}>
      <View style={styles.image1}>
        <Image1Splash />
      </View>
      <View style={styles.image2}>
        <Image2Splash />
      </View>
      <View style={styles.image3}>
        <Image3Splash />
      </View>
      <View style={styles.image4}>
        <Image4Splash />
      </View>
      <View style={styles.image5}>
        <Image5Splash />
      </View>
      <View style={styles.image6}>
        <Image6Splash />
      </View>
      <View style={[styles.textInput, {marginTop: verticalScale(420)}]}>
        <TextInputOutLine
          label="Email ..."
          style={{width: scale(331), height: verticalScale(50)}}
        />
      </View>
      <View style={styles.textInput}>
        <TextInputOutLine
          secureTextEntry={true}
          label="Mật khẩu ..."
          style={{width: scale(331), height: verticalScale(50)}}
        />
      </View>

      <Button
        onPress={() => {
          navigation.replace('Main');
        }}
        containerStyle={styles.btn}
        title="Đăng nhập"
        containerStyleTitle={{color: BaseColor.white}}
      />
      <View style={styles.textOption}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.txtSignUp}>Đăng kí</Text>
        </TouchableOpacity>
        <Text style={{color: BaseColor.grayText}} fontSize={scale(14)}>
          Hoặc kết nối qua
        </Text>
      </View>
      <View style={styles.socialOption}>
        <TouchableOpacity style={styles.btnSocial} onPress={() => {}}>
          <AntDesign name="facebook-square" size={18} color="#385C8E" />
          <Text style={{marginLeft: scale(10)}}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnSocial, {marginLeft: scale(16)}]}
          onPress={() => {}}>
          <AntDesign name="google" size={18} color="#F14336" />
          <Text style={{marginLeft: scale(10)}}>Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
