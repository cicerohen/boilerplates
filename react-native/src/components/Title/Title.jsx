import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {palette} from '../../styles.config';

const common = StyleSheet.create({
  root: {
    textTransform: 'uppercase',
  },
});

const sizes = {
  small: StyleSheet.create({
    root: {
      fontSize: 20,
    },
  }),
  medium: StyleSheet.create({
    root: {
      fontSize: 50,
    },
  }),
  large: StyleSheet.create({
    root: {
      fontSize: 80,
    },
  }),
};

const palettes = {
  primary: StyleSheet.create({
    root: {
      color: palette.primaryColor,
    },
  }),
  secondary: StyleSheet.create({
    root: {
      color: palette.secondaryColor,
    },
  }),
};

const Title = ({size = 'small', palette = 'primary', children}) => {
  return (
    <Text
      style={{
        ...palettes[palette]?.root,
        ...sizes[size]?.root,
        ...common.root,
      }}>
      {children}
    </Text>
  );
};

export default Title;
