import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [sellerIsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ sellerIsLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
