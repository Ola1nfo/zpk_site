import '../Psycholog.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function AlkoNarko() {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div>
            <Header />
            <div className="alkonarko">
                <h2>Попередження алкогольної та наркотичної залежності</h2>
                <div className='video'>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QV0bNHl-aB4?si=eUjskJKDxM_3MUAV"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
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
