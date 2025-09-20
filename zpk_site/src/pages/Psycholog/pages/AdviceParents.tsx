import '../Psycholog.scss'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'



export default function AdviceParents() {
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div>
            <Header />
            <div className="advice-parents">
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