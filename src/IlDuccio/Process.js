import React from 'react'

const Process = () => {

    const pasos = [
        {
            numero: '01',
            titulo: 'IDEA',
            texto: 'Todo comienza con una referencia, una historia o una idea que quieras llevar a la piel.'
        },
        {
            numero: '02',
            titulo: 'DESIGN',
            texto: 'La composición se trabaja para adaptarse al cuerpo, al tamaño y al estilo de la pieza.'
        },
        {
            numero: '03',
            titulo: 'SESSION',
            texto: 'Cada sesión se realiza cuidando el detalle, la técnica y el ritmo que necesita el trabajo.'
        },
        {
            numero: '04',
            titulo: 'AFTERCARE',
            texto: 'El cuidado posterior es parte del resultado final y ayuda a que el tatuaje cicatrice correctamente.'
        }
    ]

    return (
        <section className="processTattoo" id="proceso">

            <div className="processTattoo__top">

                <span>
                    05 / THE PROCESS
                </span>

                <span>
                    FROM IDEA TO SKIN
                </span>

            </div>

            <div className="processTattoo__heading">

                <h2>
                    FROM
                </h2>

                <h2 className="processTattoo__headingOutline">
                    IDEA
                </h2>

                <h2 className="processTattoo__headingRight">
                    TO SKIN.
                </h2>

            </div>

            <div className="processTattoo__list">

                {
                    pasos.map((paso) => (
                        <article
                            key={paso.numero}
                            className="processTattoo__item"
                        >

                            <span className="processTattoo__number">
                                {paso.numero}
                            </span>

                            <h3>
                                {paso.titulo}
                            </h3>

                            <p>
                                {paso.texto}
                            </p>

                            <i className="bi bi-arrow-up-right"></i>

                        </article>
                    ))
                }

            </div>

            <div className="processTattoo__backgroundWord">
                PROCESS
            </div>

        </section>
    )
}

export default Process