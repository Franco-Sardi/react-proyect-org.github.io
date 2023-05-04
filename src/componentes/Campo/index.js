import { useState } from "react"
import "./Campo.css"
import { type } from "@testing-library/user-event/dist/type"


const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuración
    const { type ="text"} = props
    console.log(props.type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo ${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo