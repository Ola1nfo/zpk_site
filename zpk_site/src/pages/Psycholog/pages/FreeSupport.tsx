import '../Psycholog.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useState } from 'react';

// img
import freesupport1 from '../img/freesuportImg1.jpg';
import freesupport2 from '../img/freesuportImg2.jpg';
import freesupport3 from '../img/freesuportImg3.jpg';
import freesupport4 from '../img/freesuportImg4.jpg';
import freesupport5 from '../img/freesuportImg5.jpg';
import freesupport6 from '../img/freesuportImg6.jpg';

export default function FreeSupport() {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleBack = () => {
        window.history.back();
    };

    const images = [
        freesupport1, freesupport2, freesupport3,
        freesupport4, freesupport5, freesupport6
    ];

    const handleClose = () => setCurrentIndex(null);
    const handlePrev = () => {
        if (currentIndex === null) return;
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    const handleNext = () => {
        if (currentIndex === null) return;
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div>
            <Header />
            <div className="free-support">
                <h2>Безкоштовна психологічна підтримка</h2>
                <div className="image-free-support">
                    {images.map((img, index) => (
                        <div key={index} className="image-free">
                            <img
                                src={img}
                                alt={`Free Support ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        </div>
                    ))}
                </div>

                {/* Модальне вікно */}
                {currentIndex !== null && (
                    <div className="modal" onClick={handleClose}>
                        <span className="close" onClick={handleClose}>&times;</span>
                        <img
                            className="modal-content"
                            src={images[currentIndex]}
                            alt={`Free Support ${currentIndex + 1}`}
                        />
                        <button className="nav prev" onClick={handlePrev}>&#10094;</button>
                        <button className="nav next" onClick={handleNext}>&#10095;</button>
                    </div>
                )}

                <div className="back-button-container">
                    <button className="back-button" onClick={handleBack}>
                        Повернутися назад
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
