import './OgoloshennyaDlyaAbituriientiv.scss'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'

import { Link } from 'react-router'

//img
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'

export default function OgoloshennyaDlyaAbituriientiv() {
    return (
        <div>
            <Header />
            <div className="container ogoloshennya">
                <h2 className="title">Перелік документів, необхідних для вступу в заклад освіти</h2>
                <div className="info-text">
                    <img src={img4} alt="Працює приймальна комісія" />
                    <div>
                        <h5>Для вступу в коледж потрібно подати наступні документи:</h5>
                        <ol>
                            <li>Заяву на ім’я директора, в якій вказати обрану професію.</li>
                            <li>Свідоцтво про закінчення 9 класів або атестат про середню освіту.</li>
                            <li>Свідоцтво про народження (копія).</li>
                            <li>Паспорт, витяг до паспорту (копія).</li>
                            <li>Ідентифікаційний код (копія).</li>
                            <li>Довідку з місця проживання, в якій  вказати склад сім’ї.</li>
                            <li>Фотокартки 3х4 – 8 штук.</li>
                            <li>Приписне РТЦК та СП.</li>
                            <li>Медична довідка 086-О та форма про щеплення. Для вступників на залізничні спеціальності додатково надається бланк для проходження обов'язкового медичного огляду.</li>
                            <li>Особи, які направляються на навчання підприємством,  додають до заяви про вступ відповідний документ, в якому гарантується  проходження практики, за підписом першого керівника.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="container ogoloshennya">
                <h2 className="title">Працює приймальна комісія</h2>
                <div className="info-text">
                    <img src={img2} alt="Працює приймальна комісія" />
                    <div>
                        <p>Запрошуємо учнів 9-11 класів до приймальної комісії у нашому навчальному закладі. Ви зможете ознайомитися зі спеціальностями, умовами вступу, матеріально-технічною базою та поспілкуватися з викладачами і студентами. Чекаємо на вас, щоб допомогти зробити перший крок до майбутньої професії!</p>
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
