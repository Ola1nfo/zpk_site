import './Museum.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

export default function MuseumPage() {
    const images = [
        "/images/museum1.jpg",
        "/images/museum2.jpg",
        // додай ще фото, якщо потрібно
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div>
            <Header />
            <div className="container museum-page">
                <h2>Музей "Українська світлиця"</h2>

                <p>
                    Музей «Українська світлиця» знайомить відвідувачів з українськими традиціями, 
                    побутом та культурною спадщиною. Тут зібрані унікальні експонати: народний одяг, 
                    вишиванки, предмети побуту та інтер’єр української хати.
                </p>

                <div className="images">
                    {images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`Українська світлиця - експозиція ${index + 1}`} 
                            onClick={() => { setPhotoIndex(index); setIsOpen(true); }} 
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>

                <p>
                    Атмосфера світлиці переносить у минуле, дозволяє відчути дух українського села 
                    та зберегти любов до національних традицій для майбутніх поколінь.
                </p>
            </div>
            <Footer />

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    );
}
