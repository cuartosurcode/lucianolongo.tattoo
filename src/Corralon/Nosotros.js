import React from 'react'

const Nosotros = () => {
  return (
    <section className="nosotrosCorralon" id="nosotros">

      <div className="nosotrosCorralon__container">

        <div className="nosotrosCorralon__contenido">

          <span className="nosotrosCorralon__preTitulo">
            SOBRE NOSOTROS
          </span>

          <h2>
            Acompañamos proyectos
            <span> desde el primer material.</span>
          </h2>

          <p className="nosotrosCorralon__intro">
            Somos un corralón orientado a brindar soluciones para construcción,
            remodelación y mantenimiento. Trabajamos para ofrecer una atención
            cercana, asesoramiento claro y materiales para cada etapa de obra.
          </p>

          <p className="nosotrosCorralon__texto">
            Atendemos tanto a particulares como a profesionales y empresas,
            buscando que cada consulta tenga una respuesta concreta. Nuestro
            objetivo es simplificar la compra de materiales y acompañar a cada
            cliente desde la planificación hasta la entrega.
          </p>

          <div className="nosotrosCorralon__valores">

            <div className="nosotrosCorralon__valor">
              <i className="bi bi-check2-circle"></i>

              <div>
                <strong>Atención cercana</strong>
                <span>Te ayudamos a encontrar la mejor opción para tu obra.</span>
              </div>
            </div>

            <div className="nosotrosCorralon__valor">
              <i className="bi bi-box-seam"></i>

              <div>
                <strong>Variedad de materiales</strong>
                <span>Productos para construcción, reparación y terminación.</span>
              </div>
            </div>

            <div className="nosotrosCorralon__valor">
              <i className="bi bi-truck"></i>

              <div>
                <strong>Logística coordinada</strong>
                <span>Organizamos entregas según las necesidades del proyecto.</span>
              </div>
            </div>

          </div>

          <a
            href="#contacto"
            className="nosotrosCorralon__btn"
          >
            Conocé más sobre nosotros
            <span>→</span>
          </a>

        </div>


        <div className="nosotrosCorralon__visual">

          <img
            src="../../Corralon/nosotros-corralon.jpg"
            alt="Corralón y materiales para construcción"
            className="nosotrosCorralon__imagen"
          />

          <div className="nosotrosCorralon__tarjeta">

            <span className="nosotrosCorralon__tarjetaNumero">
              +20
            </span>

            <div>
              <strong>Años de experiencia</strong>
              <p>
                Acompañando proyectos y construcciones.
              </p>
            </div>

          </div>

          <div className="nosotrosCorralon__decoracion">
            CONSTRUIR
          </div>

        </div>

      </div>

    </section>
  )
}

export default Nosotros