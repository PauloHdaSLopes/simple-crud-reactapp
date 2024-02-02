import React from "react";
import logo from '../../resources/logo.svg';
import icon from '../../resources/in.svg';

import './styles.css'

export default function Header(){
    return (
        <header className="header">
            <img src={logo} alt="app logo" className="logo"/>
            <h1 className="title">Meu App</h1>
            <a href="https://www.linkedin.com/in/paulo-coimbra-b1152717b/" className="link">
                <img src={icon} alt="linkedin icon" className="logo"/>
            </a>
        </header>
    )
}