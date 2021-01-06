import React from 'react';

import Context from './AuthContext';

const AuthProvider = ({children}) => {
  const value = {};
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthProvider;
