import React from "react";
import logo from '../../logo.svg';
import './styles.css'

export default function Header(){
    return (
        <header className="header">
            <img src={logo} alt="" className="logo"/>
            <h1 className="title">Meu App</h1>
            <a href="" className="link">Linkedin</a>
        </header>
    )
}