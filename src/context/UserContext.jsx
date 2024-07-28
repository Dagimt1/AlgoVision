import React, { createContext } from 'react';
import usePersistentState from './usePersistentState';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = usePersistentState('isLoggedIn', false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
