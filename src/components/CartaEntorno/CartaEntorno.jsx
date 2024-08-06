import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CartaEntorno.css'
import { useGlobalContext } from '../../GlobalContext'

const CartaEntorno = (props) => {
    const { entorno } = props
    const { setEntorno } = useGlobalContext()

    const handleEliminarEntorno = () => {
        const entornoLocalStorage = JSON.parse(localStorage.getItem('entornos'))
        const entornoLocalStorageBuscado = entornoLocalStorage.findIndex(entorno => entorno.id === props.entorno.id)
        entornoLocalStorage.splice(entornoLocalStorageBuscado, 1)
        localStorage.setItem('entornos', JSON.stringify(entornoLocalStorage))
        setEntorno(entornoLocalStorage)
    }


    return (
        <div className='carta-entorno'>
            <div className='info-carta-entorno'>
                <div className='icono-carta-entorno'><i className="bi bi-people-fill"></i></div>
                <h2 className='nombre-carta-entorno'>{entorno.nombre}</h2>
            </div>
            <div className='botones-carta-entorno'>
                <span onClick={handleEliminarEntorno} className='btn-eliminar-entorno'><i className="bi bi-trash3-fill"></i></span>
                <Link className='btn-entrar' to={`/entorno/${entorno.id}/${entorno.canales[0].id}`}>Entrar</Link>
            </div>
        </div>
    )
}

export default CartaEntorno