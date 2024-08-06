import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import React, { createContext } from "react";

// Ajuste a interface para corresponder aos tipos corretos
export interface ILogin {
  sendAccessToken: UseMutateFunction<
    AxiosResponse<{ token: string }>, // Tipo de resposta esperado
    AxiosError, // Tipo de erro esperado
    any, // Tipo de variáveis fornecidas para a mutação
    unknown
  >;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  token?: string | null;
  email?: string;
  setEmail: (email: string) => void;
  senha?: string;
  setSenha: (senha: string) => void;
}

// Valor inicial do contexto
export const LoginContext = createContext<ILogin>({
  sendAccessToken: () => Promise.resolve({ data: { token: "" } }), // Retorne uma Promise resolvida para evitar erros de inicialização
  token: null,
  setSenha: ()=>{},
  setEmail: () => {}, // Inicialize a função com uma implementação básica
  isPending: false,
  isError: false,
  isSuccess: false,
});
