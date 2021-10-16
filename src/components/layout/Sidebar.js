import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return (
        <aside>
            <h1>Tareas<span>Universidad</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Materias</h2>

                <ListadoProyectos />
            </div>

            <div className="footer">
                <p>&copy; by Ruben Valencia</p>
            </div>
        </aside>
    );
}

export default Sidebar;