import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { listarReunioesId } from "../services/routes";
import Membros from "./membros";

interface ICelula {
  id: number;
  nome: string;
  nome_Lider: string;
  Bairro: string;
  endereco_Da_Celula: string;
}
interface IMembros {
  nome: string;
}
interface resposavel {
  nome: string;
}
interface reuniaoId {
  date: string;
  celula: ICelula;
  membros: any;
  responvel_Louvor: resposavel;
  responvel_palavra: resposavel;
  responvel_quebragelo: resposavel;
  id: number;
}
function ReuniaoIds({ id }: { id: number }): JSX.Element {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["reuniaoId"],
    queryFn: async (): Promise<reuniaoId> => {
      const response = await listarReunioesId(id);
      console.log(response.data);
      return response.data;
    },
  });
  return (
    <div className="containercard">
      {
        <div className="card">
          <p>Nome da celula : {data?.celula?.nome}</p>
          <p>Endereço da celula: {data?.celula?.endereco_Da_Celula}</p>
          <p>Lider da celula: {data?.celula?.nome_Lider}</p>
          <p>Data da reunião: {data?.date}</p>
          <p>Responsavel pelo Louvor: {data?.responvel_Louvor?.nome}</p>
          <p>Responsavel pela palavra: {data?.responvel_palavra?.nome}</p>
          <p>
            {" "}
            Responsavel pelo Quebra gelo: {data?.responvel_quebragelo?.nome}
          </p>
          <p>
            Membros presentes:{" "}
            {data?.membros.map((membro: IMembros) => `${membro.nome}`)}
          </p>
        </div>
      }
    </div>
  );
}

export default ReuniaoIds;
