import React from 'react'

const Artist = () => {

    return (
        <section className="artistTattoo" id="artista">

            <div className="artistTattoo__top">

                <span>
                     THE ARTIST
                </span>

                <span>
                    TATTOO ARTIST · ARGENTINA
                </span>

            </div>


            <div className="artistTattoo__title">

                <h2>
                    DETRÁS DE
                </h2>

                <h2 className="artistTattoo__titleOutline">
                   CADA PIEZA.
                </h2>

            </div>


            <div className="artistTattoo__content">

                <div className="artistTattoo__imageWrapper">

                    <img
                        src="https://res.cloudinary.com/uyxzblhc/image/upload/v1787322452/IlDucciotrabajando.png"
                        alt="IlDucciotrabajando"
                        className="artistTattoo__image"
                    />

                    <span className="artistTattoo__imageNumber">
                        LL / 04
                    </span>

                </div>


                <div className="artistTattoo__info">

                    <span className="artistTattoo__name">
                        LUCIANO LONGO
                    </span>

                    <p className="artistTattoo__lead">
                        Cada tatuaje comienza mucho antes de que
                        la aguja toque la piel.
                    </p>

                    <p className="artistTattoo__description">
                        La idea, la composición y cada detalle forman parte
                        de un proceso pensado para crear piezas únicas,
                        adaptadas a cada persona y construidas para permanecer.
                    </p>


                    <div className="artistTattoo__specialties">

                        <div>
                            <span>01</span>
                            <p>BLACK & GREY</p>
                        </div>

                        <div>
                            <span>02</span>
                            <p>REALISMO</p>
                        </div>

                        <div>
                            <span>03</span>
                            <p>PIEZAS PERSONALIZADAS</p>
                        </div>

                    </div>

                </div>

            </div>


            <div className="artistTattoo__backgroundText">
                LUCIANO
            </div>

        </section>
    )
}

export default Artist