import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { token } = useAuth();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return <div> Aqui e o dashboard</div>;
}

export default Dashboard;
