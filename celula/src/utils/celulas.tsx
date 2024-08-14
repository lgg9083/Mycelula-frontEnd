import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { listarCelula } from "../services/routes";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface ICelula {
  nome: string;
  endereco_Da_Celula: string;
  nome_Lider: string;
  Bairro: string;
  id: number;
}

function Celulas() {
  const [celula, setCelula] = useState(true);
  const [celulaDetails, setCelulaDetails] = useState(false);
  const navigate = useNavigate();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["celulas"],
    queryFn: async () => {
      const response = await listarCelula();
      return response.data;
    },
  });
  console.log(data);
  return (
    <div className="containercard">
      {celula ? (
        data.map((celula: ICelula) => (
          <div key={celula.id} className="card">
            <h3>{celula.nome}</h3>
            <p>Endereço: {celula.endereco_Da_Celula}</p>
            <p>Líder: {celula.nome_Lider}</p>
            <p>Bairro: {celula.Bairro}</p>
            <div className="buttons">
              <Button onClick={() => {
                setCelula(false);
                setCelulaDetails(true);
              }}>Ver detalhes</Button>
              <Button
                onClick={() => {
                  navigate(`/celulas/${celula.id}`);
                }}
              >
                Editar
              </Button>
            </div>
          </div>
        ))
      ) : celulaDetails ? (
        <div>details</div>
      ) : null}
    </div>
  );
}

export default Celulas;
