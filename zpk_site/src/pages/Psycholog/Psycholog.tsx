import './Psycholog.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router'

//img
import psychologImg from './img/psychologImg.jpg'


export default function Psycholog() {
    return (
        <div>
            <Header />
            <div className="container psycholog">
                <h2 className="title">Психологічна служба</h2>
                <div className="psycholog-card">
                    <img src={psychologImg} alt="psycholog" className="psycholog-img" />
                    <div className="psycholog-info">
                        <p>
                            Вітаю Вас на сторінці практичного психолога ДНЗ 
                            “Здолбунівське вище професійне училище залізничного транспорту”! 
                            Вашим співрозмовником є практичний психолог училища 
                            <strong> Якубчик Валентина Романівна.</strong>
                        </p>
                        <ul>
                            <li>Якщо ви хочете розібратися у своїх психологічних проблемах, покращити свій настрій, визначитися у прийнятті важливого для вас рішення</li>
                            <li>Якщо ви зіткнулися з труднощами у навчанні: побоюєтеся виступати перед великою аудиторією, не можете порозумітися з викладачем, адаптуватися у новому колективі</li>
                            <li>Якщо у вас назріває конфліктна ситуація з батьками, важко знайти спільну мову з друзями чи просто необхідно виговоритися</li>
                        </ul>
                        <p>
                            Ласкаво просимо до психологічної служби училища – ці та інші питання можуть стати як предметом індивідуальної бесіди з психологом, 
                            так і однією з тем тренінгового курсу, а конфіденційність та професіоналізм вам буде гарантовано.
                        </p>
                    </div>
                </div>
                <div className="psycholog-contact">
                    <h3>Контактна інформація</h3>
                    <p><strong>Кабінет психолога:</strong> І поверх</p>
                    <p><strong>Графік роботи:</strong> понеділок – п’ятниця з 8:00 до 17:00</p>
                    <p><strong>Отримати on-line консультацію:</strong> Якубчик В. Р.</p>
                    <p><strong>Телефон:</strong> 0671636119</p>
                </div>
                <div className="psycholog-links">
                    <Link to="/psycholog/bullying" className="psycholog-link">Протидія булінгу</Link>
                    <Link to="/psycholog/war" className="psycholog-link">Допомога в часі війни</Link>
                    <Link to="/psycholog/trafficking" className="psycholog-link">Запобігання торгівлі людьми</Link>
                    <Link to="/psycholog/trainings" className="psycholog-link">Як навчитися підтримувати людей</Link>
                    <Link to="/psycholog/contacts" className="psycholog-link">Вправи при стресових ситуаціях</Link>
                    <Link to="/psycholog/contacts" className="psycholog-link">Попередження алкогольної та наркотичної залежності</Link>
                    <Link to="/psycholog/contacts" className="psycholog-link">Безкоштовна психологічна підтримка</Link>
                    <Link to="/psycholog/contacts" className="psycholog-link">Ознаки суїцидальної поведінки</Link>
                    <Link to="/psycholog/contacts" className="psycholog-link">Поради батькам</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
