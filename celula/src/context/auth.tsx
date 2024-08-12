import React, { createContext, ReactNode } from "react";

// Interface para o contexto de autenticação
export interface IAuth {
  logout: () => void;
  token: string | null;
  celulaName: number | null | undefined;
  updateToken: (token: string) => void;
  setCelulaName: (id: number) => void;
}

// Criar o contexto com um valor padrão (ou indefinido)
const AuthContext = createContext<IAuth | undefined>(undefined);

export default AuthContext;
