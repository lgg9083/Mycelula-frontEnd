
import { axiosInstance } from ".";

export interface ILogin {
  email: string;
  senha: string;
}
export interface IMembros {
  nome: string;
  endereco: string;
  bairro: string;
  data_Batismo: string;
  data_de_Nascimento: string;
  telefone: string;
  cidade: string;
  email: string;
  senha: string;
  celula: string;
}
export const LoginCount = async (dados: ILogin): Promise<any> => {
  console.log(dados, "aqui");

  const response = await axiosInstance.post("/auth", dados);
  console.log(response);
  return response;
};
export const BuscarCelulas = async (): Promise<any> => {
  const response = await axiosInstance.get("/celula");
  return response;
};

export const criarMembro = async (dados: IMembros): Promise<any> => {
  const response = await axiosInstance.post("/membros", dados);
  console.log(response);
  return response;
};
