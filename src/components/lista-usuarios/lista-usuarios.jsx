import Usuario from "../usuario/usuario"

const ListaUsuarios = () =>{
    return(
        <>
            <Usuario
                id="1"
                nombre="Jose"
                email="jose@gmail.com"
            />
            <Usuario
                id="2"
                nombre="Ana"
                email="ana@gmail.com"
            />
        </>
    )
}

export default ListaUsuarios