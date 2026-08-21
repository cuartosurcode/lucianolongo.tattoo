import React, { useEffect, useState } from 'react'

const Reserva = ({ cerrarReserva }) => {

    const [formData, setFormData] = useState({
        nombre: '',
        instagram: '',
        idea: '',
        zona: '',
        tamaño: ''
    })

    useEffect(() => {

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }

    }, [])


    const handleChange = (e) => {

        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

    }


    const handleSubmit = (e) => {

        e.preventDefault()

        const mensaje = `
Hola Luciano, quiero consultar por un turno.

Nombre: ${formData.nombre}
Instagram: ${formData.instagram}
Idea: ${formData.idea}
Zona del cuerpo: ${formData.zona}
Tamaño aproximado: ${formData.tamaño}
        `

        const mensajeCodificado = encodeURIComponent(mensaje)

        // Después reemplazamos el número por el real de Luciano
        window.open(
            `https://wa.me/5490000000000?text=${mensajeCodificado}`,
            '_blank'
        )

    }


    return (
        <section className="reservaTattoo">

            <div className="reservaTattoo__top">

                <span>
                    07 / RESERVAS
                </span>

                <button
                    type="button"
                    className="reservaTattoo__close"
                    onClick={cerrarReserva}
                >
                    <span>
                        CERRAR
                    </span>

                    <i className="bi bi-x-lg"></i>
                </button>

            </div>


            <div className="reservaTattoo__header">

                <div>

                    <span className="reservaTattoo__eyebrow">
                        CONTAME TU IDEA
                    </span>

                    <h2>
                        RESERVÁ
                        <span> TU SESIÓN.</span>
                    </h2>

                </div>

                <p>
                    Cada pieza empieza con una idea.
                    Contame qué tenés en mente y coordinamos
                    los próximos pasos.
                </p>

            </div>


            <form
                className="reservaTattoo__form"
                onSubmit={handleSubmit}
            >

                <div className="reservaTattoo__field">

                    <span>
                        01
                    </span>

                    <div>
                        <label htmlFor="nombre">
                            NOMBRE
                        </label>

                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                </div>


                <div className="reservaTattoo__field">

                    <span>
                        02
                    </span>

                    <div>
                        <label htmlFor="instagram">
                            INSTAGRAM
                        </label>

                        <input
                            id="instagram"
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            placeholder="@usuario"
                        />
                    </div>

                </div>


                <div className="reservaTattoo__field reservaTattoo__field--textarea">

                    <span>
                        03
                    </span>

                    <div>
                        <label htmlFor="idea">
                            CONTAME TU IDEA
                        </label>

                        <textarea
                            id="idea"
                            name="idea"
                            value={formData.idea}
                            onChange={handleChange}
                            placeholder="Estilo, referencias, link, concepto..."
                            required
                        />
                    </div>

                </div>


                <div className="reservaTattoo__field">

                    <span>
                        04
                    </span>

                    <div>
                        <label htmlFor="zona">
                            ZONA DEL CUERPO
                        </label>

                        <input
                            id="zona"
                            type="text"
                            name="zona"
                            value={formData.zona}
                            onChange={handleChange}
                            placeholder="Brazo, espalda, pierna..."
                            required
                        />
                    </div>

                </div>


                <div className="reservaTattoo__field">

                    <span>
                        05
                    </span>

                    <div>
                        <label htmlFor="tamaño">
                            TAMAÑO APROXIMADO
                        </label>

                        <input
                            id="tamaño"
                            type="text"
                            name="tamaño"
                            value={formData.tamaño}
                            onChange={handleChange}
                            placeholder="Ej: 15 cm"
                        />
                    </div>

                </div>


                <div className="reservaTattoo__submitWrapper">

                    <span>
                        ¿LISTO?
                    </span>

                    <button
                        type="submit"
                        className="reservaTattoo__submit"
                    >
                        <span>
                            ENVIAR CONSULTA
                        </span>

                        <i className="bi bi-arrow-up-right"></i>
                    </button>

                </div>

            </form>


            <div className="reservaTattoo__backgroundText">
                RESERVA
            </div>

        </section>
    )
}

export default Reserva