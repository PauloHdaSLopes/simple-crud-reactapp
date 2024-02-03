import React from "react";

import Table from "../Table";
import Button from "../Button"
import Modal from "../Modal"

import './styles.css'

export default function Card({data, formData, onNewClick, modalState, onSubmit, onTextChange, onCancelClick, onDeleteClick, onEditClick}){
    return (
        <div className="card">
            <div className="card-top">
                <h1 className="card-title">Dados Pessoais</h1>
                <Button text="Novo" action={onNewClick} classname="button primary"/>
            </div>
            <Table 
                data={data} 
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
            />
            <Modal 
                formData={formData}
                modalState={modalState} 
                onCloseClick={onNewClick} 
                onCancelClick={onCancelClick} 
                onSubmit={onSubmit} 
                onTextChange={onTextChange}
            />
        </div>
    );
}