import React, { useState, useEffect, ReactNode } from "react";
import AuthContext, { IAuth } from "../context/auth";
import { jwtDecode } from "jwt-decode";
const STORAGE_KEY = "token";

interface Mycelula {
  nome: string;
}
interface MyTokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
  celula: Mycelula; // Adicione outras propriedades conforme necessário
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY)
  );
  const [celulaName, setCelulaName] = useState<string | null>('')

  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEY);

    if (storedToken) {
      const decodedToken = jwtDecode<MyTokenPayload>(storedToken);
      console.log("decode", decodedToken.celula.nome);
      setCelulaName(decodedToken.celula.nome)
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
    celulaName,
    updateToken,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
