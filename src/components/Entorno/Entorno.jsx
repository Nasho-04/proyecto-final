import React, { useEffect } from 'react'
import './Entorno.css'
import { Link, useParams } from 'react-router-dom'
import ContenedorCanales from '../ContenedorCanales/ContenedorCanales'
import Chat from '../Chat/Chat'
import { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext'

const Entorno = () => {

    const { handleToggleMenu, condicionMenu } = useGlobalContext()

    const { entorno_id, canal_id } = useParams()
    const entorno = JSON.parse(localStorage.getItem('entornos')).find((entorno) => entorno.id == entorno_id)
    const canal = entorno.canales.find((canal) => canal.id == canal_id)

    const [canalActual, setCanalActual] = useState(canal)

    useEffect(() => {
        setCanalActual(canal)
    }, [canal_id])


    return (
        <>
            <header className='header-entorno'>
                <h3 className='nombre-entorno-header'>{entorno.nombre}</h3>
                <div className='contenedor-botones-header'>
                    <Link className='btn-salir' to={'/'}><span>Salir</span></Link>
                    <button className='btn-menu' onClick={handleToggleMenu}>{
                        condicionMenu
                            ? <i className="bi bi-x-lg"></i>
                            : <i className="bi bi-list"></i>}

                    </button>
                </div>
            </header>
            <div className='contenedor-principal-entorno'>
                <div className='menu-desplegable' style={{ display: condicionMenu ? 'block' : 'none' }}>
                    <ContenedorCanales entorno={entorno}></ContenedorCanales>
                </div>
                <aside className='barra-lateral'>
                    <ContenedorCanales entorno={entorno} />
                </aside>
                <main className='parte-principal'>
                    <Chat canal={canalActual} entorno={entorno}></Chat>
                </main>
            </div>
        </>
    )
}

export default Entorno