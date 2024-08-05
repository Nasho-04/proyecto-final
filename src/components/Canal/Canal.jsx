import React from 'react'
import { Link } from 'react-router-dom'

const Canal = (props) => {

    const { canal, entorno } = props

    const handleEliminarCanal = () => {
        const canalBuscado = entorno.canales.findIndex(canal => canal.id === props.canal.id)
        entorno.canales.splice(canalBuscado, 1)
        console.log(entorno.canales)
    }

    return (
        <div className='contenedor-canal'>
            <Link key={canal.id} className='link-canal' to={`/entorno/${entorno.id}/${canal.id}`}><li key={canal.id}>{canal.nombre}</li></Link>
            <span onClick={handleEliminarCanal} className='btn-eliminar-canal'><i className='bi bi-trash'></i></span>
        </div>
    )
}

export default Canal