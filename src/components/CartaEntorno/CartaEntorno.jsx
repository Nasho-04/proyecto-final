import React from 'react'
import { Link } from 'react-router-dom'
import './CartaEntorno.css'

const CartaEntorno = (props) => {
    const {entorno} = props
    return (
        <div className='carta-entorno'>
            <div className='info-carta-entorno'>
                <div className='icono-carta-entorno'><i className="bi bi-people-fill"></i></div>
                <h2 className='nombre-carta-entorno'>{entorno.nombre}</h2>
            </div>
            <Link className='btn-entrar' to={`/entorno/${entorno.id}/${entorno.canales[0].id}`}>Entrar</Link>
        </div>
    )
}

export default CartaEntorno