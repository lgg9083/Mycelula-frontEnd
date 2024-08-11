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
export interface IdCelula {
  id: number;
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

export const buscarCelularId = async (data: IdCelula): Promise<any> => {
  const response = await axiosInstance.get(`/celula/${data}`);
  return response;
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
export const listarCelula = async (): Promise<any> => {
  const response = await axiosInstance.get("/celula");
  return response;
};
