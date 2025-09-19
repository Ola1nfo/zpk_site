import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


//img
import BullyingImg1 from '../img/bullyingImg1.jpg'
import BullyingImg2 from '../img/bullyingImg2.jpg'
import BullyingImg3 from '../img/bullyingImg3.jpg'


export default function Bullying() {
    const handleBack = () => {
        window.history.back();
    }
    
    return (
        <div>
            <Header />
            <div className="container psycholog bullying">
                <h2 className="title">Протидія булінгу</h2>
                <div>
                    <img src={BullyingImg1} alt="BullyingImg1" />
                </div>
                <div>
                    <img src={BullyingImg2} alt="BullyingImg2" />
                </div>
                <div>
                    <img src={BullyingImg3} alt="BullyingImg3" />
                </div>
            </div>
            <div className="back-button-container">
                <button className="back-button" onClick={handleBack}>
                    Повернутися назад
                </button>
            </div>
            <Footer />
        </div>
    )
}
