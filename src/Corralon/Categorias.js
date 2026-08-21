import React from 'react'

const Categorias = () => {

  const categorias = [
    {
      id: 1,
      icono: 'bi-bricks',
      titulo: 'Materiales de obra',
      descripcion: 'Cementos, cales, ladrillos, bloques y materiales esenciales para cada etapa de construcción.'
    },
    {
      id: 2,
      icono: 'bi-border-width',
      titulo: 'Hierros y estructuras',
      descripcion: 'Hierros para construcción, mallas, perfiles y soluciones para estructuras.'
    },
    {
      id: 3,
      icono: 'bi-truck',
      titulo: 'Áridos',
      descripcion: 'Arena, piedra, ripio y diferentes tipos de áridos para obra y preparación de mezclas.'
    },
    {
      id: 4,
      icono: 'bi-droplet',
      titulo: 'Sanitarios',
      descripcion: 'Soluciones para baños, cocinas e instalaciones sanitarias para obra nueva o renovación.'
    },
    {
      id: 5,
      icono: 'bi-tools',
      titulo: 'Herramientas',
      descripcion: 'Herramientas y accesorios para profesionales, constructores y trabajos particulares.'
    },
    {
      id: 6,
      icono: 'bi-house-gear',
      titulo: 'Terminaciones',
      descripcion: 'Productos y materiales para completar los últimos detalles de tu proyecto.'
    }
  ]

  return (
    <section className="categoriasCorralon" id="productos">

      <div className="categoriasCorralon__container">

        <div className="categoriasCorralon__cabecera">
          <div className="categoriasCorralon__cabeceraTexto">
            <span className="categoriasCorralon__preTitulo">
              NUESTROS PRODUCTOS
            </span>
            <h2>
              Todo lo que necesitás
              <span> para tu obra.</span>
            </h2>
          </div>

          <p className="categoriasCorralon__introduccion">
            Trabajamos con una amplia variedad de materiales para
            construcción, remodelación y mantenimiento. Consultanos
            disponibilidad, marcas y opciones para tu proyecto.
          </p>

        </div>
        <div className="categoriasCorralon__grid">
          {
            categorias.map((categoria, index) => (
              <article
                className="categoriaCorralon"
                key={categoria.id}
              >
                <span className="categoriaCorralon__numero">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="categoriaCorralon__icono">
                  <i className={`bi ${categoria.icono}`}></i>
                </div>

                <div className="categoriaCorralon__contenido">
                  <h3>
                    {categoria.titulo}
                  </h3>
                  <p>
                    {categoria.descripcion}
                  </p>
                </div>

                <a
                  href="#contacto"
                  className="categoriaCorralon__link"
                >
                  Consultar
                  <span>
                    →
                  </span>
                </a>
              </article>
            ))
          }

        </div>
        <div className="categoriasCorralon__footer">
          <div>
            <strong>
              ¿No encontrás lo que necesitás?
            </strong>
            <p>
              Consultanos por otros materiales, marcas o productos específicos.
            </p>
          </div>

          <a
            href="#presupuesto"
            className="categoriasCorralon__presupuesto"
          >
            ACA TE PODEMOS AYUDAR
            <span>
              →
            </span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Categorias