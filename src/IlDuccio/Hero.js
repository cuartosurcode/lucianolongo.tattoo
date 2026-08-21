import React from 'react'

const Hero = () => {

    return (
        <section className="heroTattoo" id="inicio">

            <div className="heroTattoo__noise"></div>

            <div className="heroTattoo__top">

                <span>
                    TATTOO ARTIST
                </span>

                <span>
                    BLACK & GREY · REALISM
                </span>

            </div>

            <div className="heroTattoo__title">

                <h1 className="heroTattoo__name heroTattoo__name--luciano">
                    LUCIANO
                </h1>

                <div className="heroTattoo__imageWrapper">

                    <img
                        src="https://res.cloudinary.com/uyxzblhc/image/upload/v1787322283/luciano-hero.jpg"
                        alt="Tattoo Luciano Longo"
                        className="heroTattoo__image"
                    />

                    <div className="heroTattoo__imageOverlay"></div>

                </div>

                <h1 className="heroTattoo__name heroTattoo__name--longo">
                    LONGO
                </h1>

            </div>

            <div className="heroTattoo__bottom">

                <div className="heroTattoo__index">


                    <div></div>

                    <span>PORTFOLIO</span>

                </div>

                <div className="heroTattoo__description">

                    <p>
                        REALISM
                    </p>

                    <p>
                        BLACK & GREY
                    </p>

                </div>

                <a href="#trabajos" className="heroTattoo__scroll">

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <i className="bi bi-arrow-down"></i>

                </a>

            </div>

        </section>
    )
}

export default Hero