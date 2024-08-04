import React, { useEffect } from 'react'
import './Entorno.css'
import { Link, useParams } from 'react-router-dom'
import ENTORNOS from '../../data'
import ContenedorCanales from '../ContenedorCanales/ContenedorCanales'
import Chat from '../Chat/Chat'
import { useState } from 'react'
import {useGlobalContext} from '../../GlobalContext'

const Entorno = () => {

    const {entornos} = useGlobalContext()

    const { entorno_id, canal_id } = useParams()
    const entorno = entornos.find((entorno) => entorno.id == entorno_id)
    const canal = entorno.canales.find((canal) => canal.id == canal_id)

    const [canalActual, setCanalActual] = useState(canal)

    useEffect(() => {
        setCanalActual(canal)
    }, [canal])


    return (
        <>
            <header className='header-entorno'>
                <h3 className='nombre-entorno-header'>{entorno.nombre}</h3>
                <Link className='btn-salir' to={'/'}><span>Salir</span></Link>
            </header>
            <div className='contenedor-principal-entorno'>
                <aside className='barra-lateral'>
                    <ContenedorCanales entorno={entorno}/>
                </aside>
                <main className='parte-principal'>
                    <Chat canal={canalActual}></Chat>
                </main>
            </div>
        </>
    )
}

export default Entorno