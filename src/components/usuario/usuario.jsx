import { useState } from "react";

const Usuario = ({ id, nombre, email }) => {
    let [rol, setRol] = useState("desempleado"); //los roles seran empleado y desempleado

    const cambiarRol = () => {
        if (rol == "empleado") setRol("desempleado");
        else setRol("empleado");
    };

    return (
        <div className="card p-2">
            <button onClick={cambiarRol} className="btn btn-dark mb-2">
                Cambiar rol
            </button>
            <ul className="list-group">
                <li className="list-group-item">{id}</li>
                <li className="list-group-item">{nombre}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{rol}</li>
            </ul>
        </div>
    );
};

export default Usuario;
