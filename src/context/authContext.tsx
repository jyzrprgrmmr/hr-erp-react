import React, { createContext, useContext } from 'react';
export interface AuthProviderContext {
  user: {} | null;
  loading: boolean;
}

const AuthContext = createContext<AuthProviderContext>({
  user: null,
  loading: true,
});

const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        loading: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
