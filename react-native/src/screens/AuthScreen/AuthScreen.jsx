import React from 'react';

import SignInForm from '../../components/SignInForm';
import Screen from '../../components/Screen';

const AuthScreen = ({navigation, route}) => {
  const navigateToMain = () => {
    navigation.navigate('Main');
  };
  return (
    <Screen>
      <SignInForm onSubmit={navigateToMain} />
    </Screen>
  );
};

export default AuthScreen;
