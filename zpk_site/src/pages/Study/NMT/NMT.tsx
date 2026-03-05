import './NMT.scss'
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"

//pdf
import PlanNMT2026 from './pdf/Plan-NMT2026.pdf'

export default function NMT() {
    return (
        <div className="nmt">
            <Header />

            <main className="nmt-content">
                <h1>НМТ - 2026</h1>

                <div className="nmt-documents">
                    <a 
                        href={PlanNMT2026} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Переглянути документ
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}