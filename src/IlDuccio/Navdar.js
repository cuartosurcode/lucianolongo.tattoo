import React from 'react'

const Navdar = ({ abrirGaleria, abrirReserva }) => {
    return (
        <nav className="tattooNav">

            <div className="tattooNav__inner">

                <a
                    href="#inicio"
                    className="tattooNav__logo"
                >
                    LL.
                </a>

                <div className="tattooNav__links">

                    <button
                        type="button"
                        onClick={abrirGaleria}
                        className="tattooNav__linkButton"
                    >
                        Trabajos
                    </button>

                    <a href="#artista">
                        Artista
                    </a>

                    <a href="#proceso">
                        Proceso
                    </a>

                </div>

                <button
                    type="button"
                    className="tattooNav__book"
                    onClick={abrirReserva}
                >
                    Reservar
                    <i className="bi bi-arrow-up-right"></i>
                </button>

            </div>

        </nav>
    )
}

export default Navdar