import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const ListadoTareas = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;


    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto selecciondo
    if (!proyecto) return <h2>Selecciona una Materia</h2>;

    // Array distructuring para extraer el el proyecto actual 
    const [proyectoActual] = proyecto;

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }


    return (
        <Fragment>
            <h2>Materia: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    tareasproyecto.map(tarea => (
                        <Tarea
                            key={tarea.id}
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