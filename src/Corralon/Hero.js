import React from 'react'

const Hero = () => {

  return (
    <section className="heroCorralon" id="inicio">

      <img
        src="../../Corralon/imgHero.jfif"
        alt="Materiales para la construcción"
        className="heroCorralon__imagen"
      />

      <div className="heroCorralon__overlay"></div>

      <div className="heroCorralon__container">

        <div className="heroCorralon__contenido">

          <span className="heroCorralon__subtitulo">
            TODO PARA TU OBRA
          </span>

          <h1>
            Materiales para
            <span> construir.</span>
            <br />
            Servicio para
            <span> confiar.</span>
          </h1>

          <p>
            Todo lo que necesitás para construir, ampliar o renovar.
            Materiales de calidad, asesoramiento personalizado y
            entrega directa en tu obra.
          </p>

          <div className="heroCorralon__botones">

            <a
              href="#productos"
              className="heroCorralon__btnPrincipal"
            >
              Ver productos
              <span>→</span>
            </a>

            <a
              href="#presupuesto"
              className="heroCorralon__btnSecundario"
            >
              Pedir presupuesto
            </a>

          </div>

        </div>


        <div className="heroCorralon__datos">

          <div className="heroCorralon__dato">
            <strong>+20</strong>
            <span>Años acompañando obras</span>
          </div>

          <div className="heroCorralon__linea"></div>

          <div className="heroCorralon__dato">
            <strong>+500</strong>
            <span>Productos disponibles</span>
          </div>

          <div className="heroCorralon__linea"></div>

          <div className="heroCorralon__dato">
            <strong>24 hs</strong>
            <span>Entregas coordinadas</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero