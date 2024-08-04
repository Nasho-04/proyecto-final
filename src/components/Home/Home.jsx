import React, { useEffect } from 'react'
import './Home.css'
import { useGlobalContext } from '../../GlobalContext'
import CartaEntorno from '../CartaEntorno/CartaEntorno'
import { Link } from 'react-router-dom'

const Home = () => {
    const { setEntorno, ENTORNO } = useGlobalContext()


    useEffect(() => {
        setEntorno(ENTORNO)
    }, [ENTORNO])


    return (
        <div className='contenedor'>
            <h1>Bienvenido a "Nombre"</h1>
            <div className='contenedor-entornos'>
                <span className='subtitulo'>Entornos de trabajo</span>
                <div className='lista-entornos'>
                    {ENTORNO.map((entorno) => (
                        <CartaEntorno key={entorno.id} entorno={entorno} />
                    ))}
                </div>
                <Link className='btn-crear-entorno' to={'/entorno/nuevo'}>
                    <span>Crear entorno</span>
                </Link>
            </div>
        </div>
    )
}

export default Home