import React from 'react';

import { IUser, IContext } from '../../types/types';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { users } from '../layout/sidebar/dataUsers';

export const AuthContext = React.createContext<IContext>({} as IContext);

const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = React.useState<IUser | null>(null);

  const getauth = getAuth();

  React.useEffect(() => {

    const unListen = onAuthStateChanged(getauth, (authUser) => {
      setUser(authUser ?
        {
          id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser?.displayName || '',
        } : null);
    })

    return () => {
      unListen();
    };
  }, []);

  const values = React.useMemo(() => ({
    user,
    setUser,
    getauth
  }), [user, getauth]);

  return (
    <AuthContext.Provider value={{ user, setUser, getauth }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
