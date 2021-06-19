import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import {HORIZONTAL_PADDING} from '../../styles.config';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});

const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
