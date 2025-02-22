import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import React, { createContext } from "react";

export interface ILogin {
  sendAccessToken: UseMutateFunction<
    AxiosResponse<{ token: string }>,
    AxiosError,
    any, // Tipo de variáveis fornecidas para a mutação
    unknown
  >;
  isPending: boolean;
  isError: boolean;
  error: any;
  isSuccess: boolean;
  token?: string | null;
  celulaName?: number | null;
  email?: string;
  setEmail: (email: string) => void;
  senha?: string;
  setSenha: (senha: string) => void;
  user?: number;
}

// Valor inicial do contexto
export const LoginContext = createContext<ILogin>({
  sendAccessToken: () => Promise.resolve({ data: { token: "" } }), // Retorne uma Promise resolvida para evitar erros de inicialização
  token: null,
  celulaName: null,
  user: 0,
  setSenha: () => {},
  setEmail: () => {},
  isPending: false,
  error: null,
  isError: false,
  isSuccess: false,
});
