import React from "react";
import style from './navBar.module.css'
import logo from '../../images/image.png'
import { useAuth } from "../../hooks/useAuth";
function NavBar (){
    const {logout} = useAuth()
    return (
        <nav className={style.navBar}>
            <div className={style.title}>
                <img src={logo} alt="logo" />
                <p>GetCelula</p>
            </div>
            <ul>
             
                <li onClick={()=> logout()}>Sair</li>
            </ul>
        </nav>
    )
}

export default NavBar;