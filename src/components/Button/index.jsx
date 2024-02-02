import React from "react";
import './styles.css'

export default function Button({action, text, classname}){
    return <button className={classname} onClick={action}>{text}</button>
}