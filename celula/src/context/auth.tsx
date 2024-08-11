import React, { createContext, ReactNode } from "react";

// Interface para o contexto de autenticação
export interface IAuth {
  logout: () => void;
  token: string | null;
  celulaName: number | undefined;
  updateToken: (token: string) => void;
}

// Criar o contexto com um valor padrão (ou indefinido)
const AuthContext = createContext<IAuth | undefined>(undefined);

export default AuthContext;

