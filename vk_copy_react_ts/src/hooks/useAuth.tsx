import React from 'react';

import { AuthContext } from '../components/providers/AuthProvider';

export const useAuth = () => {
  const value = React.useContext(AuthContext);
  return value;
}