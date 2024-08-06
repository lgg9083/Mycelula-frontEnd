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
function Dashboard() {
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
                  }else {
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
            <div> reunioes</div>
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
