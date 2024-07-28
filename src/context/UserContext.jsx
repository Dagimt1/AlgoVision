import React, { createContext } from 'react';
import usePersistentState from '../Hooks/usePersistentState';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = usePersistentState('isLoggedIn', false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserContext.Provider>
  );
};
