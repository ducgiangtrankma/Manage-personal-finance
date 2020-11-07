import React, {useEffect, useState} from 'react';
import {Platform, Keyboard} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomBottomTabBar = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach((eventListener) =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  const render = () => {
    if (Platform.OS === 'ios') {
      return <BottomTabBar {...props} />;
    }
    if (!visible) {
      return null;
    }
    return <BottomTabBar {...props} />;
  };

  return render();
};

export default CustomBottomTabBar;
