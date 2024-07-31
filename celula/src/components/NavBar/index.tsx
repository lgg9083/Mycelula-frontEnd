import React from "react";
import style from './navBar.module.css'
import logo from '../../images/image.png'
function NavBar (){
    return (
        <nav className={style.navBar}>
            <div className={style.title}>
                <img src={logo} alt="logo" />
                <p>GetCelula</p>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;