import React from "react";
import delIcon from '../../resources/delete.svg'
import edit from '../../resources/edit.svg'

import './styles.css'

export default function Table({data, onDeleteClick, onEditClick}){

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Valor da renda</th>
                    <th>CPF</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(d => {
                        return (
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.nome}</td>
                                <td>{d.nascimento}</td>
                                <td>{d.renda}</td>
                                <td>{d.cpf}</td>
                                <td className="actions">
                                    <a href="/" onClick={(e) => onDeleteClick(e, d.id)}><img src={delIcon} alt="delete icon"/></a>
                                    <a href="/" onClick={(e) => onEditClick(e, d.id)}><img src={edit} alt="edit icon" /></a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}