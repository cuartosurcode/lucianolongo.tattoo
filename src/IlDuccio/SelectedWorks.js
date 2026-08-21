import React from 'react'

const SelectedWorks = () => {

    const trabajos = [
        {
            id: '01',
            titulo: 'REALISM',
            categoria: 'BLACK & GREY',
            imagen: '/ID/work-01.jpg',
            clase: 'selectedWorks__item--large'
        },
        {
            id: '02',
            titulo: 'PORTRAIT',
            categoria: 'REALISM',
            imagen: '/ID/work-02.jpg',
            clase: 'selectedWorks__item--small'
        },
        {
            id: '03',
            titulo: 'MYTHOLOGY',
            categoria: 'BLACK & GREY',
            imagen: '/ID/work-03.jpg',
            clase: 'selectedWorks__item--vertical'
        },
        {
            id: '04',
            titulo: 'DARK ART',
            categoria: 'REALISM',
            imagen: '/ID/work-04.jpg',
            clase: 'selectedWorks__item--medium'
        }
    ]

    return (
        <section className="selectedWorks" id="trabajos">

            <div className="selectedWorks__header">

                <div>
                    <span className="selectedWorks__eyebrow">
                        03 / SELECTED WORKS
                    </span>

                    <h2>
                        SELECTED
                        <span> WORKS</span>
                    </h2>
                </div>

                <p>
                    Una selección de trabajos realizados en distintas
                    piezas, estilos y composiciones.
                </p>

            </div>

            <div className="selectedWorks__grid">

                {
                    trabajos.map((trabajo) => (

                        <article
                            key={trabajo.id}
                            className={`selectedWorks__item ${trabajo.clase}`}
                        >

                            <div className="selectedWorks__imageWrapper">

                                <img
                                    src={trabajo.imagen}
                                    alt={trabajo.titulo}
                                    className="selectedWorks__image"
                                />

                                <div className="selectedWorks__overlay"></div>

                                <span className="selectedWorks__number">
                                    {trabajo.id}
                                </span>

                            </div>

                            <div className="selectedWorks__info">

                                <h3>
                                    {trabajo.titulo}
                                </h3>

                                <span>
                                    {trabajo.categoria}
                                </span>

                            </div>

                        </article>

                    ))
                }

            </div>

            <div className="selectedWorks__footer">

                <span>
                    MORE WORK
                </span>

                <a href="#galeria">
                    VIEW FULL PORTFOLIO
                    <i className="bi bi-arrow-up-right"></i>
                </a>

            </div>

        </section>
    )
}

export default SelectedWorks