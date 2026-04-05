import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

//img
import Img1 from '../img/discriminationImg1.jpg'

export default function Discrimination() {
    const handleBack = () => {
        window.history.back();
    }
    
    return (
        <div>
            <Header />
            <div className="container psycholog bullying">
                <h2 className="title">Протидія дискримінації за ознакою статі</h2>
                <div>
                    <img src={Img1} alt="Протидія дискримінації за ознакою статі" />
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
