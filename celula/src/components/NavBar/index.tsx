import React from "react";
import style from "./navBar.module.css";
import logo from "../../images/image.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className={style.navBar}>
      <div className={style.title}>
        <img src={logo} alt="logo" />
        <p>GetCelula</p>
      </div>
      <ul>
        <li className={style.lisair} onClick={() => navigate("/")}>
          Home
        </li>
        <li className={style.lisair} onClick={() => logout()}>
          Sair
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
