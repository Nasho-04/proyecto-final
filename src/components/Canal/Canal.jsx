import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { useNavigate } from 'react-router-dom'

const Canal = (props) => {

    const {ENTORNO, actualizarEntornos, condicionMenu, setCondicionMenu} = useGlobalContext()

    const navigate = useNavigate()

    const { canal, entorno } = props

    const handleEliminarCanal = () => {
        const canalBuscado = entorno.canales.findIndex(canal => canal.id === props.canal.id)
        entorno.canales.splice(canalBuscado, 1)
        const entornoStorage = ENTORNO.find(entorno => entorno.id === props.entorno.id)
        entornoStorage.canales = entorno.canales
        actualizarEntornos()
        localStorage.setItem('entornos', JSON.stringify(ENTORNO))
        navigate(`/`)
    }

    const handleCerrarMenu = () => {
        if (condicionMenu) {
            setCondicionMenu(!condicionMenu)
        }
    }

    return (
        <div onClick={handleCerrarMenu} className='contenedor-canal'>
            <Link key={canal.id} className='link-canal' to={`/entorno/${entorno.id}/${canal.id}`}><li key={canal.id}>{canal.nombre}</li></Link>
            {canal.nombre === 'General' 
            ? <></>
            :<span onClick={handleEliminarCanal} className='btn-eliminar-canal'><i className='bi bi-trash'></i></span>
            }
            
        </div>
    )
}

export default Canal