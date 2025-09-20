import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


//img
import freesupport1 from '../img/freesuportImg1.jpg'
import freesupport2 from '../img/freesuportImg2.jpg'
import freesupport3 from '../img/freesuportImg3.jpg'
import freesupport4 from '../img/freesuportImg4.jpg'
import freesupport5 from '../img/freesuportImg5.jpg'
import freesupport6 from '../img/freesuportImg6.jpg'



export default function FreeSupport() {
    const handleBack = () => {
        window.history.back()
    }

    const images = [
        freesupport1, freesupport2, freesupport3,
        freesupport4, freesupport5, freesupport6
    ]

    return (
        <div>
            <Header />
            <div className="free-support">
                <h2>Безкоштовна психологічна підтримка</h2>
                <div>
                    <div className="image-free-support">
                        {images.map((img, index) => (
                            <div key={index} className="image-free">
                                <img
                                    src={img}
                                    alt={`Trafficking ${index + 1}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="back-button-container">
                    <button className="back-button" onClick={handleBack}>
                        Повернутися назад
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}