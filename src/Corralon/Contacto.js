import React from 'react'

const Contacto = ({ cerrarContacto }) => {

  const evitarCierre = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className="contactoModal"
      onClick={cerrarContacto}
    >

      <div
        className="contactoModal__contenido"
        onClick={evitarCierre}
      >

        <button
          className="contactoModal__cerrar"
          onClick={cerrarContacto}
          aria-label="Cerrar contacto"
        >
          <i className="bi bi-x-lg"></i>
        </button>


        {/* ===============================
            INFORMACIÓN
        =============================== */}

        <div className="contactoModal__info">

          <span className="contactoModal__preTitulo">
            CONTACTO
          </span>

          <h2>
            Hablemos de
            <span> tu proyecto.</span>
          </h2>

          <p className="contactoModal__intro">
            Consultanos por materiales, disponibilidad, entregas
            o cualquier necesidad relacionada con tu obra.
          </p>


          <div className="contactoModal__datos">

            <a
              href="tel:+542990000000"
              className="contactoModal__dato"
            >

              <div className="contactoModal__icono">
                <i className="bi bi-telephone"></i>
              </div>

              <div>
                <span>Teléfono</span>
                <strong>0299 000-0000</strong>
              </div>

            </a>


            <a
              href="https://wa.me/542990000000"
              target="_blank"
              rel="noreferrer"
              className="contactoModal__dato"
            >

              <div className="contactoModal__icono">
                <i className="bi bi-whatsapp"></i>
              </div>

              <div>
                <span>WhatsApp</span>
                <strong>Escribinos ahora</strong>
              </div>

            </a>


            <div className="contactoModal__dato">

              <div className="contactoModal__icono">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div>
                <span>Dirección</span>
                <strong>Allen, Río Negro</strong>
              </div>

            </div>


            <div className="contactoModal__dato">

              <div className="contactoModal__icono">
                <i className="bi bi-clock"></i>
              </div>

              <div>
                <span>Horarios</span>
                <strong>Lunes a sábado</strong>
              </div>

            </div>

          </div>


          <div className="contactoModal__frase">

            <i className="bi bi-bricks"></i>

            <p>
              Materiales, asesoramiento y soluciones para cada etapa
              de tu construcción.
            </p>

          </div>

        </div>


        {/* ===============================
            FORMULARIO
        =============================== */}

        <div className="contactoModal__formBox">

          <div className="contactoModal__formHeader">

            <span>
              HACÉ TU CONSULTA
            </span>

            <h3>
              ¿En qué podemos ayudarte?
            </h3>

          </div>


          <form className="contactoModal__form">

            <div className="contactoModal__campo">

              <label>
                Nombre
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
              />

            </div>


            <div className="contactoModal__fila">

              <div className="contactoModal__campo">

                <label>
                  Teléfono
                </label>

                <input
                  type="tel"
                  placeholder="Tu teléfono"
                />

              </div>


              <div className="contactoModal__campo">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="tu@email.com"
                />

              </div>

            </div>


            <div className="contactoModal__campo">

              <label>
                Motivo de consulta
              </label>

              <select defaultValue="">

                <option value="" disabled>
                  Seleccioná una opción
                </option>

                <option value="productos">
                  Consulta por productos
                </option>

                <option value="entrega">
                  Consulta por entrega
                </option>

                <option value="presupuesto">
                  Solicitar presupuesto
                </option>

                <option value="otro">
                  Otra consulta
                </option>

              </select>

            </div>


            <div className="contactoModal__campo">

              <label>
                Mensaje
              </label>

              <textarea
                rows="5"
                placeholder="Contanos qué materiales o información necesitás..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contactoModal__enviar"
            >

              Enviar consulta

              <span>
                →
              </span>

            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contacto