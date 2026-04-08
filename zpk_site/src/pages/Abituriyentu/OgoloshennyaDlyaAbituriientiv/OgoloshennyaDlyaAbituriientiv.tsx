import './OgoloshennyaDlyaAbituriientiv.scss'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'

import { Link } from 'react-router'

//img
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

export default function OgoloshennyaDlyaAbituriientiv() {
    return (
        <div>
            <Header />
            <div className="container ogoloshennya">
                <h2 className="title">Запрошуємо на День відкритих дверей</h2>
                <div className="info-text">
                    <img src={img2} alt="День відкритих дверей" />
                    <div>
                        <h5>17 квітня об 11:00</h5>
                        <p>Запрошуємо учнів 9-11 класів, батьків та всіх охочих відвідати День відкритих дверей у нашому навчальному закладі. Ви зможете ознайомитися зі спеціальностями, умовами вступу, матеріально-технічною базою та поспілкуватися з викладачами і студентами. Чекаємо на вас, щоб допомогти зробити перший крок до майбутньої професії!</p>
                    </div>
                </div>
            </div>
            <div className="container ogoloshennya">
                <h2 className="title">Запрошуємо на навчання</h2>
                <div className="info-text">
                    <img src={img3} alt="Запрошуємо на навчання" />
                    <div>
                        <h5>Перелік професій</h5>
                        <div>
                            <ul>
                                <li><Link to="/our-professions/#operator">Оператор з обробки інформації та програмного забезпечення. Оператор дистанційно керованих апаратів <span>(хлопці та дівчата)</span></Link></li>
                                <li><Link to="/our-professions/#derevo">Оператор з обробки інформації та програмного забезпечення. Фотограф (фотороботи) <span>(хлопці та дівчата)</span></Link></li>
                                <li><Link to="/our-professions/#train">Машиніст тепловоза. Машиніст електровоза. Слюсар з ремонту рухомого складу <span>(хлопці)</span></Link></li>
                                <li><Link to="/our-professions/#repair">Слюсар-ремонтник. Слюсар з ремонту рухомого складу. Оглядач вагонів. Оглядач-ремонтник вагонів <span>(хлопці)</span></Link></li>
                                <li><Link to="/our-professions/#hair">Перукар (перукар-модельєр). Манікюрник <span>(хлопці та дівчата)</span></Link></li>
                                <li><Link to="/our-professions/#construction">Монтажник систем утеплення будівель. Опоряджувальник будівельний. Монтажник санітарно-технічних систем та устаткування <span>(хлопці та дівчата)</span></Link></li>
                                <li><Link to="/our-professions/#providnyk">Провідник пасажирського вагона. Стюард <span>(хлопці та дівчата)</span></Link></li>
                                <li><Link to="/our-professions/#train">Машиніст тепловоза. Слюсар з ремонту рухомого складу <span>(хлопці)</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
