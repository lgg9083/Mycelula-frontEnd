import React, { useState, useEffect, ReactNode } from "react";
import AuthContext, { IAuth } from "../context/auth";

const STORAGE_KEY = "token";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY)
  );

  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEY);

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const updateToken = (newToken: string) => {
    localStorage.setItem(STORAGE_KEY, newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
  };

  const contextValue: IAuth = {
    token,
    updateToken,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
