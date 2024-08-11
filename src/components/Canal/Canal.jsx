import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { useNavigate } from 'react-router-dom'
import './Canal.css' 

const Canal = (props) => {

    const { ENTORNO, actualizarEntornos, condicionMenu, setCondicionMenu, handleToggleMenuCanal, condicionEliminarCanal, handleToggleMenu } = useGlobalContext()

    const navigate = useNavigate()
    const { canal_id} = useParams()

    const { canal, entorno } = props

    const handleEliminarCanal = () => {
        const canalBuscado = entorno.canales.findIndex(canal => canal.id === props.canal.id)
        entorno.canales.splice(canalBuscado, 1)
        const entornoStorage = ENTORNO.find(entorno => entorno.id === props.entorno.id)
        entornoStorage.canales = entorno.canales
        actualizarEntornos()
        localStorage.setItem('entornos', JSON.stringify(ENTORNO))
        navigate(`/entorno/${entorno.id}/${entorno.canales[0].id}`)
        handleToggleMenuCanal()
        handleToggleMenu()
    }

    const handleCerrarMenu = () => {
        if (condicionMenu) {
            setCondicionMenu(!condicionMenu)
        }
    }

    return (
        <div className='contenedor-canal'>
            <div className='contenedor-menu-canal'  style={{ display: condicionEliminarCanal ? 'flex' : 'none' }}>
                <div className='menu-eliminar-canal'>
                    <p>¿Seguro que quieres eliminar este canal?</p>
                    <div className='contenedor-btn-menu-canal'>
                        <button onClick={handleEliminarCanal} className='btn-confirmar-eliminar-canal'>Eliminar</button>
                        <button onClick={handleToggleMenuCanal} className='btn-cancelar-eliminar-canal'>Cancelar</button>
                    </div>
                </div>
            </div>
            <Link key={canal.id} className={canal_id == canal.id ? 'link-canal active' : 'link-canal'} to={`/entorno/${entorno.id}/${canal.id}`}>
            <li onClick={handleCerrarMenu} key={canal.id}>{canal.nombre}</li>
            {canal.nombre === 'General'
                ? <></>
                : <span onClick={handleToggleMenuCanal} className='btn-eliminar-canal'><i className='bi bi-trash3-fill'></i></span>
            }
            </Link>
            
        </div>
    )
}

export default Canal