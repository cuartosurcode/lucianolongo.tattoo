import React, { useEffect, useRef } from 'react'

const Intro = () => {

    const videoRef = useRef(null)

   useEffect(() => {

    const video = videoRef.current

    if (!video) return

    // Reproducir a mitad de velocidad
    video.playbackRate = 0.8

    const controlarFinal = () => {

        if (!video.duration) return

        const finalUtil = video.duration - 5

        if (video.currentTime >= finalUtil) {
            video.currentTime = 0
            video.play()
        }
    }

    const observer = new IntersectionObserver(
        ([entry]) => {

            if (entry.isIntersecting) {
                video.play().catch(() => {})
            } else {
                video.pause()
            }

        },
        {
            threshold: 0.25
        }
    )

    observer.observe(video)

    video.addEventListener('timeupdate', controlarFinal)

    return () => {
        observer.disconnect()
        video.removeEventListener('timeupdate', controlarFinal)
    }

}, [])


    return (
        <section className="introTattoo">

            <div className="introTattoo__heading">

                <span className="introTattoo__eyebrow">
                    THE ART OF INK
                </span>

                <h2>
                    MAS QUE
                    <span> UN TATTOO.</span>
                </h2>

            </div>


            <div className="introTattoo__content">

                <div className="introTattoo__text">


                    <p className="introTattoo__description">
                        Cada pieza nace de una idea, una historia y una piel distinta.
                        El objetivo no es simplemente tatuar, sino crear algo que tenga
                        identidad, fuerza y permanencia.
                    </p>

                    <div className="introTattoo__artist">

                        <span>
                            LUCIANO LONGO
                        </span>

                        <span>
                            ARTISTA
                        </span>

                    </div>

                </div>


                <div className="introTattoo__videoWrapper">

                    <video
                        ref={videoRef}
                        className="introTattoo__video"
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source
                            src="https://res.cloudinary.com/uyxzblhc/video/upload/v1787322347/luciano-work.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div className="introTattoo__videoOverlay"></div>

                    <span className="introTattoo__videoLabel">
                        WORK IN PROGRESS
                    </span>

                </div>

            </div>


            <div className="introTattoo__word">
                PERMANENT
            </div>

        </section>
    )
}

export default Intro