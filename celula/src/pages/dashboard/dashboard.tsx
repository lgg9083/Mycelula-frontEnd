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
import Membros from "../../utils/membros";
import Celulas from "../../utils/celulas";
import ReuniaoIds from "../../utils/reuniaoId";
import { number } from "yup";
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
  const [reuniao, setreuniao] = useState(false);
  const [membrosss, setMembrosss] = useState(false);
  const [celulas, setcelulas] = useState(false);
  const [reuniaoId, setReuniaoId] = useState(false);
  const [id, setid] = useState(number);
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
            <h1>Visualizar dados</h1>
            <div className="reunioes">
              <img src={celula} alt="celula" />
              <Button
                onClick={() => {
                  if (celulas === false) {
                    setMembrosss(false);
                    setreuniao(false);
                    setReuniaoId(false);
                    setcelulas(true);
                    return;
                  }
                  setcelulas(false);
                }}
              >
                celula
              </Button>
            </div>
            <div className="membros">
              <img src={membros} alt="membros" />
              <Button
                onClick={() => {
                  if (membrosss === false) {
                    setreuniao(false);
                    setcelulas(false);
                    setReuniaoId(false);
                    setMembrosss(true);
                    return;
                  }
                  setMembrosss(false);
                }}
              >
                {" "}
                Membros
              </Button>
            </div>
            <div className="reunioes">
              <img src={reunioes} alt=" reunioes" />
              <Button
                onClick={() => {
                  if (reuniao === false) {
                    setMembrosss(false);
                    setcelulas(false);
                    setReuniaoId(false);
                    setreuniao(true);
                    return;
                  }
                  setreuniao(false);
                }}
              >
                {" "}
                Reuniões
              </Button>
            </div>
            <h1>Cadastrar</h1>
            <div className="cad">
              <Button onClick={() => navigate("/reuniao")}>
                Cadastrar Reunião
              </Button>
            </div>
            <div className="cad">
              <Button onClick={() => navigate("/cadastrar-reuniao")}>
                Cadastrar Celula
              </Button>
            </div>
            <div className="cad">
              <Button onClick={() => navigate("/cadastrar-reuniao")}>
                Cadastrar Membro
              </Button>
            </div>
          </div>
        </div>

        <div className="conteudo">
          {reuniao ? (
            <div className="containerCard">
              {data.map((reuniao: any) => (
                <div key={reuniao.id} className="card">
                  <h3>{reuniao.celula?.nome}</h3>
                  <p>Data: {reuniao.date}</p>
                  <p>Endereço: {reuniao.celula?.endereco_Da_Celula}</p>
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        if (reuniaoId === false) {
                          setreuniao(false);
                          setcelulas(false);
                          setMembrosss(false);
                          setReuniaoId(true);
                          setid(reuniao.id);
                          return;
                        }
                        setReuniaoId(false);
                      }}
                    >
                      Ver detalhes
                    </Button>
                    <Button>Editar</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : membrosss ? (
            <Membros />
          ) : celulas ? (
            <Celulas />
          ) : reuniaoId ? (
            <ReuniaoIds id={Number(id)} />
          ) : (
            <>
              <img src={logo} alt="logo" />
              <h1>Bem-vindo ao GetCelula!</h1>
              <p>
                Aqui você pode gerenciar as suas células, membros e reuniões.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
