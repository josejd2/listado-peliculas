const FormRegistro = () => {
    function procesarRegistro(e) {
        e.preventDefault();
        alert("procesare formulario");
    }
    return (
        <>
            <div classNameName="container mt-2">
                <h3>Formulario de Registro</h3>
                <form className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="col-3">
                        <label className="visually-hidden" for="forname">
                            Usuario
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="forname"
                                placeholder="Usuario"
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <label className="visually-hidden" for="foremail">
                            Email
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="foremail"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <label className="visually-hidden" for="forpassword">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type="password"
                                className="form-control"
                                id="forpassword"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="col-3">
                        <button
                            onClick={procesarRegistro}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormRegistro;
