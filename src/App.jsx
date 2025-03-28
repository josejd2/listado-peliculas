import './App.css'
import ListaUsuarios from './components/lista-usuarios/lista-usuarios'
import coleccion from './data/peliculas.json'

function App() {

  return (
    <>
    <div className='container'>
      <h1>Catalogo de peliculas</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Director</th>
            <th>Generos</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
        {coleccion.map((pelicula) =>(
          <tr key={pelicula._id.$oid}>
            <td>{pelicula.titulo}</td>
            <td>{pelicula.director}</td>
            <td>{pelicula.genero}</td>
            <td>{pelicula.año}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <h2>Lista de usuarios</h2>
      <ListaUsuarios/>
    </div>
    </>
  )
}

export default App
