import './Trafficking.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useState, useEffect } from 'react'

// імпорт зображень
import suicidalbehaviorImg1 from '../img/suicidalbehaviorImg1.jpg'
import suicidalbehaviorImg2 from '../img/suicidalbehaviorImg2.jpg'
import suicidalbehaviorImg3 from '../img/suicidalbehaviorImg3.jpg'
import suicidalbehaviorImg4 from '../img/suicidalbehaviorImg4.jpg'

export default function SuicidalBehavior() {
    const [currentIndex, setCurrentIndex] = useState(null)

    const images = [
        suicidalbehaviorImg1, suicidalbehaviorImg2, suicidalbehaviorImg3,
        suicidalbehaviorImg4
    ]

    const handleBack = () => {
        window.history.back()
    }

    const handlePrev = (e) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = (e) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const handleClose = () => setCurrentIndex(null)

    // 🔥 Обробка клавіатури
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentIndex === null) return

            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'ArrowRight') handleNext()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex])

    return (
        <div>
            <Header />
            <div className="container psycholog trafficking">
                <h2 className="title">Запобігання торгівлі людьми</h2>
                <div className="images-grid">
                    {images.map((img, index) => (
                        <div key={index} className="image-item">
                            <img
                                src={img}
                                alt={`Trafficking ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        </div>
                    ))}
                </div>
                <div className="back-button-container">
                    <button className="back-button" onClick={handleBack}>
                        Повернутися назад
                    </button>
                </div>

                {/* Модальне вікно */}
                {currentIndex !== null && (
                    <div className="modal" onClick={handleClose}>
                        <span className="close" onClick={handleClose}>&times;</span>
                        <img
                            className="modal-content"
                            src={images[currentIndex]}
                            alt={`Trafficking ${currentIndex + 1}`}
                        />
                        <button className="nav prev" onClick={handlePrev}>&#10094;</button>
                        <button className="nav next" onClick={handleNext}>&#10095;</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
