import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

// pdf
import psychogymnasticsPdf from '../pdf/psychogymnasticsPdf.pdf'
import exercisesPdf from '../pdf/exercisesPdf.pdf'

// img
import stresImg1 from '../img/stresImg1.jpg'

export default function Stres() {
    const handleBack = () => {
        window.history.back()
    }

    const videos = [
        "https://www.youtube.com/embed/6po0yvsy0xQ", 
        "https://www.youtube.com/embed/178c8e68JcQ",
        "https://www.youtube.com/embed/2yY7YgOvDPU",
        "https://www.youtube.com/embed/A_QjcFaQ1p0",
        "https://www.youtube.com/embed/8Wmfdv-JdPc"
    ]

    return (
        <div>
            <Header />
            <div className="container stres">
                <h2>Вправи при стресових ситуаціях</h2>
                <p>
                    Вправи для дітей та підлітків, які перебувають у стресовій ситуації,
                    для зняття психоемоційного напруження
                </p>
                <div className="psycholog-links">
                    <a className='psycholog-link' href={psychogymnasticsPdf} target="_blank" rel="noopener noreferrer">
                        Психогімнастика
                    </a>
                    <a className='psycholog-link' href={exercisesPdf} target="_blank" rel="noopener noreferrer">
                        Вправи
                    </a>
                </div>
                <div className="videos-grid">
                    {videos.map((url, index) => (
                        <div key={index} className="video-item">
                            <iframe 
                                src={url}
                                title={`video-${index}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className='stresImg'>
                    <img src={stresImg1} alt="stresImg1" />
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
