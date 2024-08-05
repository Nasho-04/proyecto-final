import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ENTORNOS from "./data";
import { obtenerEntornos, obtenerCanales } from "./data";
import {v4 as uuid} from 'uuid';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const entornos = ENTORNOS

    const [condicionBtn, setCondicionBtn] = useState(false)
    const [ENTORNO, setEntorno] = useState(entornos)
    const [inputValue, setInputValue] = useState('')
    const [condicionMenu, setCondicionMenu] = useState(false)

    const agregarEntorno = (nombre) => {
        const nuevoEntorno = {
            id: uuid(),
            nombre: nombre,
            canales: [
                {
                    id: 1,
                    nombre: 'General',
                    mensajes: []
                }
            ]
        }
        setEntorno([...ENTORNO, nuevoEntorno])
    }


    const handleToggleCondicion = () => {
        setCondicionBtn(!condicionBtn)
    }

    const handleToggleMenu = () => {
        setCondicionMenu(!condicionMenu)
    }

    const actualizarEntornos = () => {
        setEntorno([...ENTORNO])
    }


    return (
        <GlobalContext.Provider value={
            {
                entornos: entornos,
                condicionBtn: condicionBtn,
                setCondicionBtn: setCondicionBtn,
                ENTORNO: ENTORNO,
                setEntorno: setEntorno,
                inputValue: inputValue,
                setInputValue: setInputValue,
                handleToggleCondicion: handleToggleCondicion,
                agregarEntorno: agregarEntorno,
                condicionMenu: condicionMenu,
                handleToggleMenu: handleToggleMenu,
                actualizarEntornos: actualizarEntornos
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}