import React, { createContext, ReactNode } from "react";

// Interface para o contexto de autenticação
export interface IAuth {
  logout: () => void;
  token: string | null;
  celulaName: string | null;
  updateToken: (token: string) => void;
}

// Criar o contexto com um valor padrão (ou indefinido)
const AuthContext = createContext<IAuth | undefined>(undefined);

export default AuthContext;

