import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ENTORNOS from "./data";
import { obtenerEntornos, obtenerCanales } from "./data";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const entornos = ENTORNOS

    const [condicionBtn, setCondicionBtn] = useState(false)
    const [ENTORNO, setEntorno] = useState(entornos)
    const [inputValue, setInputValue] = useState('')
    const [condicionMenu, setCondicionMenu] = useState(false)

    const agregarEntorno = (nombre) => {
        const nuevoEntorno = {
            id: ENTORNO.length + 1,
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
                handleToggleMenu: handleToggleMenu
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}