import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import {palette, HORIZONTAL_PADDING} from '../../styles.config';

const common = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});

const palettes = {
  primary: StyleSheet.create({
    root: {
      borderColor: palette.primaryColor,
    },
  }),
};
const Input = ({palette = 'primary', style = {}, ...rest}) => {
  return (
    <TextInput
      style={{...palettes[palette]?.root, ...common.root, ...style.root}}
      {...rest}
    />
  );
};

export default Input;
