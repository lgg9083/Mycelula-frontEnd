import React, { useState, useEffect, ReactNode } from "react";
import AuthContext, { IAuth } from "../context/auth";
import { jwtDecode } from "jwt-decode";
const STORAGE_KEY = "token";

interface Mycelula {
  nome: string;
  id: number;
}
export interface MyTokenPayload {
 
  celula: number;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY)
  );
  const [celulaName, setCelulaName] = useState<number | null>();

  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEY);
    console.log("chamando");
    if (storedToken) {
      const decodedToken = jwtDecode<MyTokenPayload>(storedToken);

      setToken(storedToken);
      console.log(decodedToken.celula);
      setCelulaName(decodedToken.celula);
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
    celulaName,
    setCelulaName,
    updateToken,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
