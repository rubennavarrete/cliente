
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from "uuid";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'


const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Reforzar Seguridad', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 6, nombre: 'Reforzar Seguridad', estado: false, proyectoId: 3 },
            { id: 7, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 8, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
            { id: 9, nombre: 'Reforzar Seguridad', estado: false, proyectoId: 3 },
            { id: 10, nombre: 'Elegir Hosting', estado: true, proyectoId: 2 },
            { id: 11, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 12, nombre: 'Reforzar Seguridad', estado: false, proyectoId: 1 },
            { id: 13, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 14, nombre: 'Elegir Hosting', estado: true, proyectoId: 5 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Creando dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Crear las funciones 

    // Obtener las tareas de un proyectos
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    // Eliminar tarea por su Id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para editarla
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Eliminar la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
