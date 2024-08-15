import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { listarCelula } from "../services/routes";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CelulaDetails from "./celulaDetails";
interface ICelula {
  nome: string;
  endereco_Da_Celula: string;
  nome_Lider: nomeLider;
  Bairro: string;
  id: number;
}
interface nomeLider {
  nome:string
}
function Celulas() {
  const [id, setId] = useState(0);
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
    <div className="containerDash">
      <div className="containercard">
        {celula ? (
          data?.map((celula: ICelula) => (
            <div key={celula.id} className="card">
              <h3>{celula.nome}</h3>
              <p>Endereço: {celula.endereco_Da_Celula}</p>
              <p>Líder: {celula.nome_Lider?.nome}</p>
              <p>Bairro: {celula.Bairro}</p>
              <div className="buttons">
                <Button
                  onClick={() => {
                    setId(celula.id);
                    setCelula(false);
                    setCelulaDetails(true);
                  }}
                >
                  Ver detalhes
                </Button>
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
          <CelulaDetails id={id} />
        ) : null}
      </div>
    </div>
  );
}

export default Celulas;
