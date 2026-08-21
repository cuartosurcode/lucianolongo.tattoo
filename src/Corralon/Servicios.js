import React from 'react'

const Servicios = () => {

  const servicios = [
    {
      id: 1,
      icono: 'bi-truck',
      titulo: 'Entrega en obra',
      descripcion:
        'Coordinamos el envío de materiales directamente a tu obra, adaptándonos a cantidades, ubicación y necesidades de cada proyecto.'
    },
    {
      id: 2,
      icono: 'bi-chat-square-text',
      titulo: 'Asesoramiento',
      descripcion:
        'Te ayudamos a elegir materiales, alternativas y cantidades aproximadas según el tipo de trabajo que estés realizando.'
    },
    {
      id: 3,
      icono: 'bi-file-earmark-text',
      titulo: 'Presupuestos',
      descripcion:
        'Preparamos cotizaciones claras y personalizadas para obras particulares, profesionales y empresas.'
    },
    {
      id: 4,
      icono: 'bi-person-check',
      titulo: 'Atención personalizada',
      descripcion:
        'Consultanos por productos, disponibilidad y soluciones específicas. Nuestro objetivo es acompañarte durante todo el proyecto.'
    }
  ]

  return (
    <section className="serviciosCorralon" id="servicios">

      <div className="serviciosCorralon__container">

        <div className="serviciosCorralon__imagenBox">

          <img
            src="../../Corralon/servicios-corralon.jpg"
            alt="Depósito y materiales para construcción"
            className="serviciosCorralon__imagen"
          />

          <div className="serviciosCorralon__imagenOverlay"></div>

          <div className="serviciosCorralon__imagenTexto">

            <span>
              SERVICIO
            </span>

            <strong>
              De nuestro depósito
              <br />
              directo a tu obra.
            </strong>

          </div>

          <div className="serviciosCorralon__detalleImagen">

            <i className="bi bi-geo-alt"></i>

            <div>
              <strong>
                Entregas coordinadas
              </strong>

              <span>
                Consultá zonas y disponibilidad
              </span>
            </div>

          </div>

        </div>


        <div className="serviciosCorralon__contenido">

          <span className="serviciosCorralon__preTitulo">
            MÁS QUE MATERIALES
          </span>


          <h2>
            Estamos para ayudarte
            <span> en cada etapa.</span>
          </h2>


          <p className="serviciosCorralon__intro">
            Sabemos que cada obra es diferente. Por eso no solo ofrecemos
            materiales: brindamos atención, asesoramiento y soluciones para
            que puedas avanzar con tu proyecto de forma simple y organizada.
          </p>


          <div className="serviciosCorralon__lista">

            {
              servicios.map((servicio, index) => (

                <article
                  className="servicioCorralon"
                  key={servicio.id}
                >

                  <div className="servicioCorralon__numero">
                    {String(index + 1).padStart(2, '0')}
                  </div>


                  <div className="servicioCorralon__icono">
                    <i className={`bi ${servicio.icono}`}></i>
                  </div>


                  <div className="servicioCorralon__texto">

                    <h3>
                      {servicio.titulo}
                    </h3>

                    <p>
                      {servicio.descripcion}
                    </p>

                  </div>

                </article>

              ))
            }

          </div>


          <div className="serviciosCorralon__acciones">

            <a
              href="#presupuesto"
              className="serviciosCorralon__btnPrincipal"
            >
              Solicitar presupuesto

              <span>
                →
              </span>
            </a>


            <a
              href="#contacto"
              className="serviciosCorralon__btnSecundario"
            >
              Hacer una consulta
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Servicios