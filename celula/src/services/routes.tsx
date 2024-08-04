import { promises } from "dns";
import { axiosInstance } from ".";
import { SkipToken } from "@tanstack/react-query";

export interface ILogin {
  email: string;
  senha: string;
}

export const LoginCount = async (dados: ILogin): Promise<any> => {
  console.log(dados, "aqui");

  const response = await axiosInstance.post("/auth", dados);

  return response;
};
export const BuscarCelulas = async ():Promise<any> => {
  const response = await axiosInstance.get('/celula')
  return response
}
