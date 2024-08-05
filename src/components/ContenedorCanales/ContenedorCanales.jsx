import React, { useEffect } from 'react'
import './ContenedorCanales.css'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext'
import { v4 as uuid } from 'uuid';
import Canal from '../Canal/Canal'

const ContenedorCanales = (props) => {
    const { condicionBtn, setCondicionBtn, inputValue, setInputValue, handleToggleCondicion } = useGlobalContext()
    const { entorno } = props

    const [canales, setCanales] = useState(entorno.canales)

    const handleSubmitCanales = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            const nuevoCanal = { id: uuid(), nombre: inputValue, mensajes: [] }
            entorno.canales.push(nuevoCanal)
            setCanales(entorno.canales)
            setCondicionBtn(!condicionBtn)
            setInputValue('')
        }
    }

    useEffect(() => {
        setCanales(entorno.canales)
    }, [entorno])

    return (
        <div className='contenedor-canales'> 
            <h4 className='titulo-canales'>Canales</h4>
            <ul className='lista-canales'>
                {canales.map((canal) => (
                    <Canal key={canal.id} canal={canal} entorno={entorno}/>
                ))}
            </ul>
            <div className='contenedor-crear-canal'>{condicionBtn
                ? <form className='form-crear-canal' onSubmit={handleSubmitCanales}>
                    <input type="text" name='crear-canal' id='crear-canal' onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Nombre del canal' />
                    <button type='submit' className='btn-confirmar-canal'>Confirmar</button>
                    <button className='btn-cancelar-canal' onClick={handleToggleCondicion}>Cancelar</button>
                </form>
                : <button className='btn-crear-canal' onClick={handleToggleCondicion}>Crear canal</button>}
            </div>
        </div>
    )
}

export default ContenedorCanales