import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto selecciondo
    if (!proyecto) return <h2>Selecciona una Materia</h2>;

    // Array distructuring para extraer el el proyecto actual 
    const [proyectoActual] = proyecto;


    const tareasProyectos = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Reforzar Seguridad', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ]

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }


    return (
        <Fragment>
            <h2>Materia: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyectos.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyectos.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Materia &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;