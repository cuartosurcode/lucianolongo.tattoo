// import { HashRouter, Routes, Route } from 'react-router-dom'
// import './AppPropia.css'
// import CustomProvider from './Provider'
// import Navdar from './MiPagina/Navdar'
// import Main from './MiPagina/Main'
// import { useState } from 'react'
// import Footer from './MiPagina/Footer'

// function App() {

//   const [contactoAbierto, setContactoAbierto] = useState(false)
//   const [reservaAbierta, setReservaAbierta] = useState(false)

//   const abrirContacto = () => {
//     setContactoAbierto(true)
//   }

//   const abrirReserva = () => {
//     setReservaAbierta(true)
//   }

//   return (

//     <div className="App">

//       <HashRouter>
//         <Navdar abrirContacto={abrirContacto} abrirReserva={abrirReserva} />
//         <Routes>
//           <Route path="/" element={<Main />} />
//         </Routes>
//         <Footer />
//       </HashRouter>
//     </div>
//   )
// }
// function NewApp() {

//   return (

//     <CustomProvider>

//       <App />

//     </CustomProvider>

//   )

// }
// export default NewApp


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
// import CustomProvider from './Provider'
// import Navbar from './Component/Navbar'
// import Main from './Component/Main'
// import Gallery from './Component/Gallery'
// import Contact from './Component/Contact'
// import { useState } from 'react'
// import Footer from './Component/Footer'
// import Reserva from './Component/Reserva'
// function App() {
//   const [contactoAbierto, setContactoAbierto] = useState(false)
//   const [reservaAbierta, setReservaAbierta] = useState(false)
//   const abrirContacto = () => {
//     setContactoAbierto(true)
//   }
//   const cerrarContacto = () => {
//     setContactoAbierto(false)
//   }
//   const abrirReserva = () => {
//     setReservaAbierta(true)
//   }
//   const cerrarReserva = () => {
//     setReservaAbierta(false)
//   }
//   return (
//       <div className="App">
//        <BrowserRouter>
//         <Navbar abrirContacto={abrirContacto} abrirReserva={abrirReserva} />
//         <Routes>
//           <Route path="/" element={<Main abrirContacto={abrirContacto} />} />
//           <Route path="/galeria" element={<Gallery />} />
//         </Routes>
//         <Contact abierto={contactoAbierto} cerrar={cerrarContacto} />
//         <Reserva abierto={reservaAbierta} cerrar={cerrarReserva} />
//         <Footer />
//       </BrowserRouter>
//     </div>
//   )
// }
// function NewApp() {
//   return (
//       <CustomProvider>
//        <App />
//          </CustomProvider>
//     )

// }
// export default NewApp

// import { HashRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import './Corralon.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

// import CustomProvider from './Provider'
// import Navdar from './Corralon/Navdar'
// import Main from './Corralon/Main'
// import Footer from './Corralon/Footer'
// import Contacto from './Corralon/Contacto'

// function App() {

//   const [contactoAbierto, setContactoAbierto] = useState(false)

//   const abrirContacto = () => {
//     setContactoAbierto(true)
//   }

//   const cerrarContacto = () => {
//     setContactoAbierto(false)
//   }

//   return (

//     <div className="App">

//       <HashRouter>

//         <Navdar abrirContacto={abrirContacto} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Main abrirContacto={abrirContacto} />
//             }
//           />
//         </Routes>

//         <Footer abrirContacto={abrirContacto} />

//         {
//           contactoAbierto &&
//           <Contacto cerrarContacto={cerrarContacto} />
//         }

//       </HashRouter>

//     </div>
//   )
// }


// function NewApp() {

//   return (

//     <CustomProvider>

//       <App />

//     </CustomProvider>

//   )
// }

// export default NewApp



import { HashRouter, Routes, Route } from 'react-router-dom'
import './IlDUccio.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import CustomProvider from './Provider'
import Navdar from './IlDuccio/Navdar'
import Main from './IlDuccio/Main'
import Footer from './IlDuccio/Footer'
import { useState } from 'react'
import Galeria from './IlDuccio/Galeria'
import Reserva from './IlDuccio/Reserva'


function App() {

  const [galeriaAbierta, setGaleriaAbierta] = useState(false)
    const [reservaAbierta, setReservaAbierta] = useState(false)

    const abrirGaleria = () => {
        setGaleriaAbierta(true)
    }

    const cerrarGaleria = () => {
        setGaleriaAbierta(false)
    }

    const abrirReserva = () => {
        setReservaAbierta(true)
    }

    const cerrarReserva = () => {
        setReservaAbierta(false)
    }

    return (
        <div className="App">

            <HashRouter>

                <Navdar
                    abrirGaleria={abrirGaleria}
                    abrirReserva={abrirReserva}
                />

                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>

                <Footer abrirReserva={abrirReserva} />

                {
                    galeriaAbierta &&
                    <Galeria cerrarGaleria={cerrarGaleria} />
                }

                {
                    reservaAbierta &&
                    <Reserva cerrarReserva={cerrarReserva} />
                }

            </HashRouter>

        </div>
    )
}


function NewApp() {

  return (

    <CustomProvider>

      <App />

    </CustomProvider>

  )
}

export default NewApp