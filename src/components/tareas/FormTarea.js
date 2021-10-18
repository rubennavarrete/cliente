import React, { useContext, useState, useEffect } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {


    // Extraer proyectos activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener las funciones del contect de tareas
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer nombre de la tarea 
    const { nombre } = tarea;

    // Si no hay proyecto selecciondo
    if (!proyecto) return null;

    // Array distructuring para extraer el el proyecto actual 
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Si es edicion o si es nueva tarea
        if (tareaseleccionada === null) {
            tarea.proyectoId = proyectoActual.id;
            tarea.state = false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina tarea seleccionada del state
            limpiarTarea();
        }

        //pasar la validacion

        // agregar la nueva tarea al state de tareas 


        // Obtener y filtrar las tareas del proyecto actual 
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }


    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="Contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="Contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTarea;