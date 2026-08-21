import React from 'react'

const Footer = ({ abrirContacto }) => {

  return (
    <footer className="footerCorralon">

      <div className="footerCorralon__container">

        <div className="footerCorralon__top">

          <div className="footerCorralon__marca">

            <div className="footerCorralon__logo">

              <span className="footerCorralon__logoIcon">
                C
              </span>

              <div>
                <strong>CORRALÓN</strong>
                <span>DEL SUR</span>
              </div>

            </div>

            <p>
              Materiales, asesoramiento y soluciones para construcción,
              remodelación y mantenimiento.
            </p>

          </div>


          <div className="footerCorralon__columna">

            <h3>Navegación</h3>

            <a href="#inicio">
              Inicio
            </a>

            <a href="#productos">
              Productos
            </a>

            <a href="#servicios">
              Servicios
            </a>

            <a href="#nosotros">
              Nosotros
            </a>

          </div>


          <div className="footerCorralon__columna">

            <h3>Contacto</h3>

            <button
              className="footerCorralon__linkBtn"
              onClick={abrirContacto}
            >
              Hacer una consulta
            </button>

            <a href="tel:+542990000000">
              0299 000-0000
            </a>

            <a
              href="https://wa.me/542990000000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <span>
              Allen, Río Negro
            </span>

          </div>


          <div className="footerCorralon__cta">

            <span>
              ¿TENÉS UNA OBRA EN MARCHA?
            </span>

            <h3>
              Contanos qué necesitás.
            </h3>

            <p>
              Consultanos por materiales, disponibilidad y opciones
              de entrega para tu proyecto.
            </p>

            <button
              className="footerCorralon__btn"
              onClick={abrirContacto}
            >
              Contactanos

              <span>
                →
              </span>
            </button>

          </div>

        </div>


        <div className="footerCorralon__bottom">

          <p>
            © 2026 Corralón del Sur. Todos los derechos reservados.
          </p>

          <div className="footerCorralon__redes">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://wa.me/542990000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer