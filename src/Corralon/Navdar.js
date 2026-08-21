import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navdar = ({ abrirContacto }) => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  const toggleMenu = () => {
    setMenuAbierto(prev => !prev)
  }

  return (
    <header className="navCorralon">

      <div className="navCorralon__container">

        {/* LOGO */}
        <Link
          to="/"
          className="navCorralon__logo"
          onClick={cerrarMenu}
        >
          <span className="navCorralon__logoIcon">
            C
          </span>

          <div className="navCorralon__logoTexto">
            <strong>CORRALÓN</strong>
            <span>DEL SUR</span>
          </div>
        </Link>


        {/* LINKS */}
        <nav className={`navCorralon__links ${menuAbierto ? 'activo' : ''}`}>

          <a href="#inicio" onClick={cerrarMenu}>
            Inicio
          </a>

          <a href="#productos" onClick={cerrarMenu}>
            Productos
          </a>

          <a href="#servicios" onClick={cerrarMenu}>
            Servicios
          </a>

          <a href="#nosotros" onClick={cerrarMenu}>
            Nosotros
          </a>

          <button
            className="navCorralon__contactoLink"
            onClick={() => {
              cerrarMenu()
              abrirContacto()
            }}
          >
            Contacto
          </button>
        </nav>


        {/* PRESUPUESTO */}
        <a
          href="#presupuesto"
          className="navCorralon__presupuesto"
        >
          Pedir presupuesto
        </a>


        {/* HAMBURGUESA */}
        <button
          className={`navCorralon__menuBtn ${menuAbierto ? 'activo' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  )
}

export default Navdar