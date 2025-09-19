import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


//img
import WarImg from '../img/warImg.jpg'
import { Link } from 'react-router'


export default function Bullying() {
    const handleBack = () => {
        window.history.back();
    }
    
    return (
        <div>
            <Header />
            <div className="container psycholog bullying">
                <h2 className="title">Допомога в часі війни</h2>
                <div>
                    <img src={WarImg} alt="WarImg" />
                </div>
                <div>
                    <Link to="https://k-s.org.ua/resources/coping-war/" className='link-style'><p>Інформаційні ресурси по темі психологічної допомоги в часі війни</p></Link>
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
