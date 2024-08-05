import { v4 as uuid } from 'uuid';

const ENTORNOS = [
    {
        id: uuid(),
        nombre: 'Entorno 1',
        canales: [
            {
                id: uuid(),
                nombre: 'General',
                mensajes: [
                    {
                        autor: 'Yo',
                        id: 1,
                        texto: 'hola'
                    },
                    {
                        autor: 'Marcos',
                        id: 2,
                        texto: 'hola, como estás?'
                    }
                ]
            },
            {
                id: uuid(),
                nombre: 'Trabajo',
                mensajes: [
                    {
                        autor: 'Yo',
                        id: 1,
                        texto: 'hay que terminar el proyecto en estos días'
                    },
                    {
                        autor: 'Julian',
                        id: 2,
                        texto: 'nos juntamos ete finde en mi casa?'
                    },
                    {
                        autor: 'Marcos',
                        id: 3,
                        texto: 'dale, yo estoy libre'
                    },
                ]
            }
        ]
    },
    {
        id: uuid(),
        nombre: 'Entorno 2',
        canales: [
            {
                id: uuid(),
                nombre: 'General',
                mensajes: [
                    {
                        autor: 'Juan',
                        id: 1,
                        texto: 'salimos a comer el lunes?'
                    },
                    {
                        autor: 'Ignacio',
                        id: 2,
                        texto: 'sii dale, me copa la idea'
                    }
                ]
            },
        ]
    },
]


export const obtenerEntornos = () => {
    if (localStorage.getItem('entornos')) {
        return JSON.parse(localStorage.getItem('entornos'))
    } else {
        localStorage.setItem('entornos', JSON.stringify(ENTORNOS))
        return JSON.parse(localStorage.getItem('entornos'))
    }
}

export const obtenerCanales = (entorno) => {
    return entorno.canales
}

export default ENTORNOS