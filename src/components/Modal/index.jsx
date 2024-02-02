import React from "react";
import { useState } from "react";
import { post } from '../../services/api'

import './styles.css'

export default function Modal() {
    const [modalState, setModalState] = useState('show')
    const [formData, setFormData] = useState({"nome":"","nascimento":"","renda":"","cpf":""})

    const handleClose = () => {
        setModalState('hidden')
    }

    const handleTextChange = (e) => {
        const field = e.target.name
        const value = e.target.value

        const newForm = { ...formData}
        newForm[field] = value
        setFormData(newForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(formData)
    }

    return (
        <div className={`modal modal-${modalState}`}>
            <div className="modal-content">
                <span className="modal-close" onClick={handleClose}>&times;</span>
                <form className="form" onSubmit={handleSubmit}>
                    <label for="nome">Nome</label>
                    <input name="nome" type="text" className="form-input" onChange={handleTextChange}/>
                    
                    <label for="nascimento">Data de Nascimanto</label>
                    <input name="nascimento" type="date" className="form-input" placeholder="00/00/0000" onChange={handleTextChange}/>

                    <label for="renda">Valor da Renda</label>
                    <input name="renda" type="number" className="form-input" placeholder="000,00" onChange={handleTextChange}/>

                    <label for="cpf">CPF</label>
                    <input name="cpf" type="text" className="form-input" placeholder="000.000.000-00" onChange={handleTextChange}/>

                    <div className="form-btns">
                        <input type="submit" value="Salvar" className="form-input"/>
                        <input type="reset" value="Cancelar" className="form-input"/>
                    </div>
                </form>
            </div>
        </div>
    )
}