import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ENTORNOS from "./data";
import { obtenerEntornos, obtenerCanales } from "./data";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const entornos = ENTORNOS

    const [condicionBtn, setCondicionBtn] = useState(false)
    const [entorno, setEntorno] = useState(obtenerEntornos())
    const [inputValue, setInputValue] = useState('')



    const handleToggleCondicion = () => {
        setCondicionBtn(!condicionBtn)
    }


    return (
        <GlobalContext.Provider value={
            {
                entornos: entornos, 
                condicionBtn: condicionBtn,
                setCondicionBtn: setCondicionBtn,
                entorno: entorno,
                setEntorno: setEntorno,
                inputValue: inputValue,
                setInputValue: setInputValue,
                handleToggleCondicion: handleToggleCondicion,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}