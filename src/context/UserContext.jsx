import React, { createContext } from 'react';
import usePersistentState from '../Hooks/usePersistentState';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = usePersistentState('isLoggedIn', false);
  const [authToken, setAuthToken] = usePersistentState('authToken', '');

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, authToken, setAuthToken }}>
      {children}
    </UserContext.Provider>
  );
};
