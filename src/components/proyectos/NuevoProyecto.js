import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {


    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;


    //State para proyectos
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        //De estar todo correcto agregamos al state
        agregarProyecto(proyecto);

        //Reiniciar el form 
        guardarProyecto({
            nombre: ''
        })

    }

    //Mostrar Formulario 
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return (
        <Fragment>
            <button
                className="btn btn-block btn-primario"
                type="button"
                onClick={onClickFormulario}
            >
                Nuevo Materia
            </button>

            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Materia"
                        />

                    </form>
                ) : null}

            {errorformulario
                ?
                <p className="mensaje error">El nombre de la Materia es obligatorio</p>
                : null}
        </Fragment>
    );
}

export default NuevoProyecto;