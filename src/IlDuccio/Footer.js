import React from 'react'

const Footer = ({ abrirReserva }) => {

    return (
        <footer className="footerTattoo" id="contacto">

            <div className="footerTattoo__top">

                <span>
                    06 / LET'S TALK
                </span>

                <span>
                    LUCIANO LONGO · TATTOO ARTIST
                </span>

            </div>


            <div className="footerTattoo__main">

                <h2 className="footerTattoo__title">

                    <span>
                        HACELO
                    </span>

                    <span className="footerTattoo__titleOutline">
                        PARA SIEMPRE.
                    </span>

                </h2>


                <div className="footerTattoo__action">

                    <p>
                        ¿Tenés una idea en mente?
                        <br />
                        Hagamos que quede para siempre.
                    </p>

                   <button
    type="button"
    className="footerTattoo__book"
    onClick={abrirReserva}
>
    <span>
        RESERVAR TURNO
    </span>

    <i className="bi bi-arrow-up-right"></i>
</button>

                </div>

            </div>


            <div className="footerTattoo__links">

                <div className="footerTattoo__linksLabel">
                    CONNECT
                </div>

                <a
                    href="https://www.instagram.com/lucianolongo.tattoo"
                    target="_blank"
                    rel="noreferrer"
                >
                    INSTAGRAM

                    <i className="bi bi-arrow-up-right"></i>
                </a>

                <a href="#whatsapp">
                    WHATSAPP

                    <i className="bi bi-arrow-up-right"></i>
                </a>

            </div>


            <div className="footerTattoo__signature">

                <span>
                    LUCIANO
                </span>

                <span>
                    LONGO
                </span>

            </div>


            <div className="footerTattoo__bottom">

                <span>
                    © {new Date().getFullYear()}
                </span>

                <span>
                    TATTOO ARTIST
                </span>

                <a href="#inicio">
                    BACK TO TOP
                    <i className="bi bi-arrow-up"></i>
                </a>

            </div>

        </footer>
    )
}

export default Footer