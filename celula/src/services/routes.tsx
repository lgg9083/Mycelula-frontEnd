import { AxiosResponse } from "axios";
import { axiosInstance } from ".";

export interface ILogin {
  email: string;
  senha: string;
}
export interface IBusca {
  id: number;
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
export interface ICreateCelula {
  nome: string;
  Bairro: string;
  endereco_Da_Celula: string;
  nome_Lider: string;
}
export interface IReuniao {
  date: string;
  responvel_Louvor: number;
  responvel_palavra: number;
  responvel_quebragelo: number;
  idCelula: number;
  membros: number[];
}

export const LoginCount = async (dados: ILogin): Promise<any> => {
  console.log(dados, "aqui");

  const response = await axiosInstance.post("/auth", dados);
  console.log(response);
  return response;
};

export const criarCelula = async (dados: ICreateCelula): Promise<AxiosResponse> => {
  const response = await axiosInstance.post("/celula", dados);
  console.log(response);
  return response;
};
export const BuscarCelulas = async (): Promise<any> => {
  const response = await axiosInstance.get("/celula");
  return response;
};

export const buscarCelularId = async (id: number | null): Promise<any> => {
  const response = await axiosInstance.get(`/celula/${id}`);
  return response.data;
};
export const buscarMembroPorId = async (data: IBusca): Promise<any> => {
  const response = await axiosInstance.get(`/membros/${data}`);
  return response;
};
export const criarMembro = async (dados: IMembros): Promise<any> => {
  const response = await axiosInstance.post("/membros", dados);
  console.log(response);
  return response;
};
export const listarMembro = async () => {
  const response = await axiosInstance.get("/membros");
  return response;
};
export const listarReunioes = async (): Promise<any> => {
  const response = await axiosInstance.get("/reuniao");
  return response;
};

export const listarReunioesId = async (id: number): Promise<any> => {
  const response = await axiosInstance.get(`/reuniao/${id}`);
  return response;
};
export const criarReuniao = async (data: IReuniao): Promise<any> => {
  const response = await axiosInstance.post("/reuniao", data);
  return response;
};
export const listarCelula = async (): Promise<any> => {
  const response = await axiosInstance.get("/celula");
  return response;
};
