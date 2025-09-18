import './Museum.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useState, useEffect } from "react";

// img
import museum1 from './img/museum1.jpg';
import museum2 from './img/museum2.jpg';
import museum3 from './img/museum3.jpg';
import museum4 from './img/museum4.jpg';
import museum5 from './img/museum5.jpg';
import museum6 from './img/museum6.jpg';
import museum7 from './img/museum7.jpg';
import museum8 from './img/museum8.jpg';
import museum9 from './img/museum9.jpg';
import museum10 from './img/museum10.jpg';
import museum11 from './img/museum11.jpg';
import museum12 from './img/museum12.jpg';
import museum13 from './img/museum13.jpg';

export default function MuseumPage() {
    const images = [
        museum1, museum2, museum3, museum4, museum5,
        museum6, museum7, museum8, museum9, museum10,
        museum11, museum12, museum13
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const showPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    const showNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") {
                setSelectedIndex(null);
            } else if (e.key === "ArrowLeft") {
                showPrev();
            } else if (e.key === "ArrowRight") {
                showNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
            showNext();
        } else if (diff < -50) {
            showPrev();
        }
        setTouchStartX(null);
    };

    return (
        <div>
            <Header />
            <div className="container museum-page">
                <h2>Музей "Українська світлиця"</h2>
                <p> Музей «Українська світлиця» знайомить відвідувачів з українськими традиціями, побутом та культурною спадщиною. Тут зібрані унікальні експонати: народний одяг, вишиванки, предмети побуту та інтер’єр української хати.</p>
                <div className="images-grid">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Експозиція ${index + 1}`}
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}
                </div>
                <p className='p-footer'>Атмосфера світлиці переносить у минуле, дозволяє відчути дух українського села та зберегти любов до національних традицій для майбутніх поколінь.</p>
            </div>
            <Footer />
            {selectedIndex !== null && (
                <div
                    className="lightbox"
                    onClick={() => setSelectedIndex(null)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <span className="close">&times;</span>
                    <span
                        className="arrow left"
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    >
                        &#10094;
                    </span>
                    <img
                        src={images[selectedIndex]}
                        alt={`Фото ${selectedIndex + 1}`}
                        className="lightbox-img"
                    />
                    <span
                        className="arrow right"
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                    >
                        &#10095;
                    </span>
                </div>
            )}
        </div>
    );
}
