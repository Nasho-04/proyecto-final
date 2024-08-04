import React from 'react'
import './ContenedorCanales.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext'

const ContenedorCanales = (props) => {
    const { condicionBtn, setCondicionBtn, inputValue, setInputValue, handleToggleCondicion } = useGlobalContext()
    const { entorno } = props

    const [canales, setCanales] = useState(entorno.canales)

    const handleSubmitCanales = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            const nuevoCanal = { id: canales.length + 1, nombre: inputValue, mensajes: [] }
            entorno.canales.push(nuevoCanal)
            setCanales(entorno.canales)
            setCondicionBtn(!condicionBtn)
            setInputValue('')
        }
    }

    return (
        <div className='contenedor-canales'> 
            <h4 className='titulo-canales'>Canales</h4>
            <ul className='lista-canales'>
                {canales.map((canal) => (
                    <Link key={canal.id} className='link-canal' to={`/entorno/${entorno.id}/${canal.id}`}><li key={canal.id}>{canal.nombre}</li></Link>
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