import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useState, useEffect } from 'react'

// імпорт зображень
import peoplesuportImg1 from '../img/peoplesuportImg1.jpg'
import peoplesuportImg2 from '../img/peoplesuportImg2.jpg'
import peoplesuportImg3 from '../img/peoplesuportImg3.jpg'
import peoplesuportImg4 from '../img/peoplesuportImg4.jpg'
import peoplesuportImg5 from '../img/peoplesuportImg5.jpg'
import peoplesuportImg6 from '../img/peoplesuportImg6.jpg'


export default function Trafficking() {
    const [currentIndex, setCurrentIndex] = useState(null)

    const images = [
        peoplesuportImg1, peoplesuportImg2, peoplesuportImg3,
        peoplesuportImg4, peoplesuportImg5, peoplesuportImg6
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
