import React, { useReducer } from 'react';

import { v4 as uuidv4 } from "uuid";

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from '../../types';



const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Interacion Hombre Maquina' },
        { id: 2, nombre: 'Aplicaciones Informaticas 1' },
        { id: 3, nombre: 'Base de Datos 2' },
        { id: 4, nombre: 'Emprendimiento' },
        { id: 5, nombre: 'Sistemas operativos' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
    }

    // Dsipach para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }


    //Obtener los proyectos 
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }


    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Seleccionar el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;