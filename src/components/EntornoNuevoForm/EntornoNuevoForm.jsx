import React from 'react'
import './EntornoNuevoForm.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { useNavigate } from 'react-router-dom'

const EntornoNuevoForm = () => {

    const { agregarEntorno, inputValue, setInputValue } = useGlobalContext()

    const navigate = useNavigate()

    const handleSubmitEntorno = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            agregarEntorno(inputValue)
            setInputValue('')
            navigate('/')
        }
    }

    return (
        <div className='contenedor-entorno-nuevo-form'>
            <div className='contenedor-formulario'>
                <h3 className='titulo-entorno-nuevo-form'>Crea un nuevo entorno</h3>
                <form className='form-entorno-nuevo' onSubmit={handleSubmitEntorno}>
                    <input className='input-entorno-nuevo' type="text" placeholder="Nombre del nuevo entorno" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
                    <div className='contenedor-botones-form-entorno'>
                        <button className='btn-submit-entorno' type="submit">Crear entorno</button>
                        <Link to={'/'} className='link-cancelar-entorno'><button className='btn-cancelar-entorno'>Cancelar</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EntornoNuevoForm