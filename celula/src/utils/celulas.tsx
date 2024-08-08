import React from "react";
import { useQuery } from "@tanstack/react-query";
import { listarCelula } from "../services/routes";
interface ICelula {
  nome: string;
  endereco_Da_Celula: string;
  nome_Lider: string;
  Bairro: string;
  id: number;
}

function Celulas() {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["celulas"],
    queryFn: async () => {
      const response = await listarCelula();
      return response.data;
    },
  });
  return (
    <div className="containercard">
      {isSuccess &&
        data.map((celula: ICelula) => (
          <div key={celula.id} className="card">
            <h3>{celula.nome}</h3>
            <p>Endereço: {celula.endereco_Da_Celula}</p>
            <p>Líder: {celula.nome_Lider}</p>
            <p>Bairro: {celula.Bairro}</p>
          </div>
        ))}
    </div>
  );
}

export default Celulas;
