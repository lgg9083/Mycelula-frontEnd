import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import membros from "../../images/membros.png";
import reunioes from "../../images/reunioes.png";
import celula from "../../images/celulas.png";
import logo from "../../images/logo.png";
import NavBar from "../../components/NavBar";
import { Button } from "@mui/material";
import { useQueries, useQuery } from "@tanstack/react-query";
import { buscarMembroPorId, listarReunioes } from "../../services/routes";
import { IBusca } from "../../services/routes";

function Dashboard() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["reuniao"],
    queryFn: async () => {
      const response = await listarReunioes();
      console.log(response.data);
      return response.data;
    },
  });

  const navigate = useNavigate();
  const [celulas, setCelulas] = useState(false);
  const { token } = useAuth();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <>
      <NavBar />
      <div className="containerdash">
        <div className="barra">
          <div className="img">
            <div className="reunioes">
              <img src={celula} alt="celula" />
              <Button>Celulas</Button>
            </div>
            <div className="membros">
              <img src={membros} alt="membros" />
              <Button> Membros</Button>
            </div>
            <div className="reunioes">
              <img src={reunioes} alt=" reunioes" />
              <Button
                onClick={() => {
                  if (celulas === false) {
                    setCelulas(true);
                  } else {
                    setCelulas(false);
                  }
                }}
              >
                {" "}
                Reuniões
              </Button>
            </div>
          </div>
        </div>

        <div className="conteudo">
          {celulas ? (
            <div className="containerCard">
              {data.map((reuniao: any) => (
                <div key={reuniao.id} className="card">
                  <h3>{reuniao.celula?.nome}</h3>
                  <p>Data: {reuniao.date}</p>
                  <p>Endereço: {reuniao.celula?.endereco_Da_Celula}</p>
                  <p>Lider da celula: {reuniao.celula?.nome_Lider}</p>
                  <p> Louvor: {reuniao.responvel_Louvor?.nome}</p>
                  <p> Palavra: {reuniao.responvel_palavra?.nome}</p>
                  <p> Quebra-Gelo: {reuniao.responvel_quebragelo?.nome}</p>
                  <p>Membros : {reuniao.membros?.map((membro:any)=>{
                    return `${membro.nome}, `;
                  })}</p>
                  
                </div>
              ))}
            </div>
          ) : (
            <>
              <img src={logo} alt="logo" />
              <h1>Bem-vindo ao GetCelula!</h1>
              <p>
                Aqui você pode gerenciar as suas celulas, membros e reuniões.
              </p>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
