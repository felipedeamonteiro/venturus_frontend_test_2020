import React, { createContext, useCallback, useState, useContext } from 'react';

interface SignInCredentials {
  name: string;
}

interface AuthContextData {
  user: User | null;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

interface User {
  name: string;
  firstName: string;
  secondName: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const name = localStorage.getItem('@VenturusTest:name');
    const firstName = localStorage.getItem('@VenturusTest:firstName');
    const secondName = localStorage.getItem('@VenturusTest:secondName');

    if (name && firstName && secondName) {
      return { name, firstName, secondName };
    }

    return null;
  });

  const signIn = useCallback(({ name }) => {
    const [firstName, secondName] = name.split(' ');

    localStorage.setItem('@VenturusTest:name', name);
    localStorage.setItem('@VenturusTest:firstName', firstName);
    localStorage.setItem('@VenturusTest:secondName', secondName);

    setData({ name, firstName, secondName });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@VenturusTest:name');
    localStorage.removeItem('@VenturusTest:firstName');
    localStorage.removeItem('@VenturusTest:secondName');

    setData(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}
