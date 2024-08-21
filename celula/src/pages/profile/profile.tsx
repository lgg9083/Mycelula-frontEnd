import { useQuery } from "@tanstack/react-query";
import NavBar from "../../components/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { useLogin } from "../../hooks/useLogin";
import "./profile.css";
import { buscarMembroPorId } from "../../services/routes";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { user } = useLogin();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (typeof user !== "number") {
        throw new Error("User ID must be a number");
      }
      const result = await buscarMembroPorId(user);
      return result;
    },
  });
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="profile">
          <div className="perfil"></div>
          <h1>Profile</h1>
          <h1>Nome : {data?.data.nome}</h1>
          <h1>Endereço : {data?.data.endereco}</h1>
          <h1>Data de Nascimento : {data?.data.data_de_nascimento}</h1>
          <h1>Telefone : {data?.data.telefone}</h1>
          <h1>Email : {data?.data.email}</h1>
          <Button>Alterar Dados</Button>
        </div>
      </div>
    </>
  );
};
export default Profile;
