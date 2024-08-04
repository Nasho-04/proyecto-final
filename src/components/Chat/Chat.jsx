import React, { useEffect } from 'react'
import './Chat.css'
import { useState } from 'react'
import Mensaje from '../Mensaje/Mensaje'

const Chat = (props) => {

    const [inputValue, setInputValue] = useState('')

    const { canal } = props
    const [mensajes, setMensajes] = useState(canal.mensajes)


    useEffect(() => {
        setMensajes(canal.mensajes), [canal]
    })

    const handleSubmitMensaje = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            const nuevoMensaje = { id: mensajes.length + 1, autor: 'Yo', texto: inputValue }
            canal.mensajes.push(nuevoMensaje)
            setMensajes(canal.mensajes)
            setInputValue('')
        }
    }

    useEffect(() => {
        setMensajes(canal.mensajes), [canal.mensajes]
    })


    return (
        <div className='chat'> {
            <div className='contenedor-mensajes'>
                {mensajes.map((mensaje) => (
                    <Mensaje key={mensaje.id} autor={mensaje.autor} texto={mensaje.texto}
                    ></Mensaje>
                ))}
            </div>}
            <form onSubmit={handleSubmitMensaje} className='contenedor-input-mensajes'>
                    <input type="text" name='mensaje' id='mensaje'
                        placeholder='Escribe un mensaje' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <div className='contenedor-btn-enviar'>
                        <button type='submit' className='btn-enviar-mensaje'>Enviar</button>
                    </div>
            </form>
        </div>
    )
}

export default Chat