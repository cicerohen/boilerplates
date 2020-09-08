import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../Input';
import Button from '../Button';

import {VERTICAL_PADDING} from '../../styles.config';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
  },
  input: {
    display: 'flex',
    marginVertical: 2.5,
  },
  button: {
    marginTop: VERTICAL_PADDING,
  },
});

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.root}>
      <Input style={{root: styles.input}} placeholder="your email" />
      <Input style={{root: styles.input}} placeholder="your password" />
      <Button style={{root: styles.button}} onPress={onSubmit}>
        <Text>Sign in</Text>
      </Button>
    </View>
  );
};

export default SignInForm;
