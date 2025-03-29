import { useState, useEffect } from "react";

const ListaPeliculas = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch("/peliculas.json")
            .then((res) => res.json())
            .then((data) => setPeliculas(data))
            .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mb-4">Catalogo de peliculas</h1>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="table-warning">
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Director</th>
                            <th scope="col">Año</th>
                            <th scope="col">Generos</th>
                            <th scope="col">Actores</th>
                            <th scope="col">Puntuación</th>
                            <th scope="col">Duración</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peliculas.map((pelicula) => (
                            <tr key={pelicula.id}>
                                <td>{pelicula.titulo}</td>
                                <td>{pelicula.director}</td>
                                <td>{pelicula.año}</td>
                                <td>{pelicula.generos.join(", ")}</td>
                                <td>{pelicula.actores.join(", ")}</td>
                                <td>{pelicula.puntuacion}</td>
                                <td>{pelicula.duracion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaPeliculas;
