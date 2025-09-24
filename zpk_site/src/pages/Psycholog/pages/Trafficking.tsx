import './Trafficking.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useState, useEffect } from 'react';

// імпорт зображень
import traffickingImg1 from '../img/traffickingImg1.jpg';
import traffickingImg2 from '../img/traffickingImg2.jpg';
import traffickingImg3 from '../img/traffickingImg3.jpg';
import traffickingImg4 from '../img/traffickingImg4.jpg';
import traffickingImg5 from '../img/traffickingImg5.jpg';
import traffickingImg6 from '../img/traffickingImg6.jpg';
import traffickingImg7 from '../img/traffickingImg7.jpg';
import traffickingImg8 from '../img/traffickingImg8.jpg';
import traffickingImg9 from '../img/traffickingImg9.jpg';
import traffickingImg10 from '../img/traffickingImg10.jpg';
import traffickingImg11 from '../img/traffickingImg11.jpg';
import traffickingImg12 from '../img/traffickingImg12.jpg';
import traffickingImg13 from '../img/traffickingImg13.jpg';
import traffickingImg14 from '../img/traffickingImg14.jpg';
import traffickingImg15 from '../img/traffickingImg15.jpg';

export default function Trafficking() {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const images = [
        traffickingImg1, traffickingImg2, traffickingImg3,
        traffickingImg4, traffickingImg5, traffickingImg6,
        traffickingImg7, traffickingImg8, traffickingImg9,
        traffickingImg10, traffickingImg11, traffickingImg12,
        traffickingImg13, traffickingImg14, traffickingImg15
    ];

    const handleBack = () => {
        window.history.back();
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex === null) return;
        setCurrentIndex(prev => prev! === 0 ? images.length - 1 : prev! - 1);
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex === null) return;
        setCurrentIndex(prev => prev! === images.length - 1 ? 0 : prev! + 1);
    };

    const handleClose = () => setCurrentIndex(null);

    // Обробка клавіатури
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;

            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

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
    );
}
