import React from "react";

import './styles.css'

export default function Modal({formData, modalState, onCloseClick, onSubmit, onTextChange, onCancelClick}) {
    return (
        <div className={`modal modal-${modalState}`}>
            <div className="modal-content">
                <span className="modal-close" onClick={onCloseClick}>&times;</span>
                <form className="form" onSubmit={onSubmit}>
                    <label for="nome">Nome</label>
                    <input name="nome" type="text" className="form-input" onChange={onTextChange} value={formData.nome}/>
                    
                    <label for="nascimento">Data de Nascimento</label>
                    <input name="nascimento" type="date" className="form-input" placeholder="00/00/0000" onChange={onTextChange} value={formData.nascimento}/>

                    <label for="renda">Valor da Renda</label>
                    <input name="renda" type="number" className="form-input" placeholder="000,00" onChange={onTextChange} value={formData.renda}/>

                    <label for="cpf">CPF</label>
                    <input name="cpf" type="text" className="form-input" placeholder="000.000.000-00" onChange={onTextChange} value={formData.cpf}/>

                    <div className="form-btns">
                        <input type="submit" value="Salvar" className="form-input" />
                        <input type="reset" value="Cancelar" className="form-input" onClick={onCancelClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}