import React from "react";
import "../stylesheets/tarea.css";
import {CloseSquareOutlined} from '@ant-design/icons';

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
            className="tarea-texto"
            onClick={() => completarTarea(id)}>
           {texto}
            </div>
            <div 
            className="tarea-contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                <CloseSquareOutlined className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;