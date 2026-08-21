import React, { useEffect } from 'react'

const Galeria = ({ cerrarGaleria }) => {

    const trabajos = [
        {
            id: 1,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322507/01.jpg',
            categoria: 'BLACK & GREY'
        },
        {
            id: 2,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322507/02.jpg',
            categoria: 'REALISM'
        },
        {
            id: 3,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322507/04.jpg',
            categoria: 'PORTRAIT'
        },
        {
            id: 4,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322508/03.jpg',
            categoria: 'BLACK & GREY'
        },
        {
            id: 5,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322508/05.jpg',
            categoria: 'REALISM'
        },
        {
            id: 6,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322508/06.jpg',
            categoria: 'CUSTOM'
        },
          {
            id: 7,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322509/07.jpg',
            categoria: 'BLACK & GREY'
        },
        {
            id: 8,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322510/08.jpg',
            categoria: 'REALISM'
        },
        {
            id: 9,
            imagen: 'https://res.cloudinary.com/uyxzblhc/image/upload/v1787322510/09.jpg',
            categoria: 'CUSTOM'
        }
    ]

    useEffect(() => {

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }

    }, [])

    return (
        <section className="galleryTattoo">

            <div className="galleryTattoo__top">

                <div>
                    <span>
                        LUCIANO LONGO
                    </span>

                    <h2>
                        WORK
                        <span>ARCHIVE.</span>
                    </h2>
                </div>

                <button
                    type="button"
                    className="galleryTattoo__close"
                    onClick={cerrarGaleria}
                >
                    <span>
                        CLOSE
                    </span>

                    <i className="bi bi-x-lg"></i>
                </button>

            </div>


            <div className="galleryTattoo__meta">

                <span>
                    SELECTED TATTOOS
                </span>

                <span>
                    BLACK & GREY · REALISM
                </span>

            </div>


            <div className="galleryTattoo__grid">

                {
                    trabajos.map((trabajo, index) => (

                        <article
                            key={trabajo.id}
                            className="galleryTattoo__item"
                        >

                            <div className="galleryTattoo__imageWrapper">

                                <img
                                    src={trabajo.imagen}
                                    alt={`Trabajo ${trabajo.id}`}
                                    className="galleryTattoo__image"
                                />

                                <div className="galleryTattoo__imageOverlay"></div>

                                <span className="galleryTattoo__number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                            </div>

                            <div className="galleryTattoo__info">

                                <span>
                                    {trabajo.categoria}
                                </span>

                                <span>
                                    LL / {String(index + 1).padStart(2, '0')}
                                </span>

                            </div>

                        </article>

                    ))
                }

            </div>

        </section>
    )
}

export default Galeria