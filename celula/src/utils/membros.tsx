import { useQuery } from "@tanstack/react-query";
import React from "react";
import { listarMembro } from "../services/routes";
import { Button } from "@mui/material";
import membroID from "./reuniaoId";
function Membros() {
  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["membros"],
    queryFn: async () => {
      const response = await listarMembro();
      console.log(response);
      return response.data;
    },
  });
  return (
    <div className="containerCard">
      {isSuccess &&
        data.map((membro: any) => (
          <div key={membro.id} className="card">
            <p>Nome: {membro.nome}</p>
            <p>Data de Nascimento: {membro.data_de_nascimento}</p>
            <p>Endereço: {membro.endereco}</p>
            <p>Telefone: {membro.telefone}</p>
            <p>Email: {membro.email}</p>
          </div>
        ))}
    </div>
  );
}

export default Membros;
