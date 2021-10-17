import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';


const FormTarea = () => {


    // Extraer proyectos activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto selecciondo
    if (!proyecto) return null;

    // Array distructuring para extraer el el proyecto actual 
    const [proyectoActual] = proyecto;


    return (
        <div className="formulario">
            <form>
                <div className="Contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>

                <div className="Contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;