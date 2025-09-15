import './RozkladUrokiv.scss'
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
import { Link } from 'react-router-dom'

export default function RozkladDzvinkiv() {
    const groups = Array.from({ length: 22 }, (_, i) => i + 1);

    return (
        <div>
            <Header/>
            <div className="container rozklad-urokiv">
                <h4>РОЗКЛАД УРОКІВ у 2025/2026 навчальному році</h4>
                <p>обирай свою групу та перевіряй актуальний розклад</p>

                <div className="btn-uroki">
                    {groups.map(group => (
                        <Link key={group} to={`/rozklad/${group}`} className="group-btn">
                            {group} група
                        </Link>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
