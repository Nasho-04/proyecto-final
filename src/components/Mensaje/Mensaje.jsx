import React from 'react'
import './Mensaje.css'

const Mensaje = (props) => {
  return (
    <div className='contenedor-mensaje'>
        <div className='info-mensaje'>
            <span className='autor-mensaje'>{props.autor}</span>
            <span className='fecha-mensaje'>hoy</span>
        </div>
        <div>
            <p className='texto-mensaje'>{props.texto}</p>
        </div>
    </div>
  )
}

export default Mensaje