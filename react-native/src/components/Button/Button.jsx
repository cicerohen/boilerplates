import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {palette} from '../../styles.config';

const common = StyleSheet.create({
  root: {
    borderRadius: 5,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'uppercase',
  },
});

const palettes = {
  primary: StyleSheet.create({
    root: {
      ...common.root,
      backgroundColor: palette.primaryColor,
    },
    text: {
      ...common.text,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    root: {
      ...common.root,
      backgroundColor: palette.secondaryColor,
    },
    text: {
      ...common.text,
      color: '#fff',
    },
  }),
};

const Button = ({palette = 'primary', onPress, style = {}, children}) => {
  return (
    <TouchableOpacity
      style={{...palettes[palette]?.root, ...style.root}}
      onPress={onPress}>
      <Text style={{...palettes[palette]?.text, ...style.text}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
