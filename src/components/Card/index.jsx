import React from "react";

import Table from "../Table";
import Button from "../Button"

import './styles.css'

export default function Card({action, data}){
    return (
        <div className="card">
            <div className="card-top">
                <h1 className="card-title">Dados Pessoais</h1>
                <Button text="Novo" action={action} classname="button primary"/>
            </div>
            <Table data={data}/>
        </div>
    );
}