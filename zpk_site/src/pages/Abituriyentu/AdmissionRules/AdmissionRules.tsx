import "./AdmissionRules.scss"
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router'


//img
import rulesPDF from "./file/Правила прийому_2025скан.pdf"
import FaceIcon from '@mui/icons-material/Face'
import PersonIcon from '@mui/icons-material/Person'
import Photo1 from './img/photo1.jpg'
import Photo2 from './img/photo2.jpg'
import darvin from './img/charlz-darvin.jpg'
import apsheroni from './img/apsheroni.jpg'


export default function AdmissionRules() {
    return (
        <div>
            <Header/>
            <div className="detail container">
                <h2>Цікавишся деталями вступу до нашого закладу освіти?</h2>
                <p>Тоді тобі потрібно ознайомитися з правилами прийому. Обирай та натискай свою кнопку!</p>
                <a href={rulesPDF} className="btn btn-pravyla me-2">Правила прийому</a>
                <div className="profession-box">
                    <h2>Професії та спеціальності</h2>
                    <p>Наші професії актуальні та затребувані на ринку праці</p>
                </div>
                <div className="tabs-section">
                    <Tabs aria-label="Basic tabs" defaultValue={0}>
                        <TabList className="tabList">
                            <Tab><FaceIcon /> на базі 9 класів</Tab>
                            <Tab><PersonIcon /> на базі 11 класів</Tab>
                        </TabList>
                        <TabPanel value={0}>
                            <Card className="profession-card">
                                <div className="card-image">
                                    <img
                                    src={Photo1}
                                    loading="lazy"
                                    alt=""
                                    />
                                </div>
                                <div className="card-content">
                                    <Typography className="card-title" id="card-description">
                                    З отриманням повної загальної середньої освіти:
                                    </Typography>
                                    <p><i>Термін навчання 2 роки 10 місяців</i></p>
                                    <Typography
                                    className="card-text"
                                    aria-describedby="card-description"
                                    component="div" >
                                        <ul>
                                            <li>Оператор з обробки інформації та програмного забезпечення. Оператор дистанційно керованих апаратів <span>(хлопці та дівчата)</span></li>
                                            <li>Деревообробник будівельний. Оператор з обробки інформації та програмного забезпечення <span>(хлопці та дівчата)</span></li>
                                            <li>Машиність тепловоза. Машиність електровоза. Слюсар з ремонту рухомого складу <span>(хлопці)</span></li>
                                            <li>Слюсар-ремонтник. слюсар з ремонту рухомого складу. оглядач вагонів. Оглядач-ремонтник вагонів <span>(хлопці та)</span></li>
                                            <li>Перукар (перука-модельєр). Манікюрник <span>(хлопці та дівчата)</span></li>
                                            <li>Монтажник систем утеплення будівель. Опоряджувальник будівельний. Монтажник санітарно-технічних систем та устаткування <span>(хлопці та дівчата)</span></li>
                                        </ul>
                                        <hr />
                                        <div className="quote-block">
                                            <img src={darvin} alt="Арістотель" />
                                            <blockquote>
                                                <p>"Якщо ви вдало оберете професію і докладете до неї душу, то щастя саме знайде вас."</p>
                                                <footer>Чарльз Дарвін</footer>
                                            </blockquote>
                                        </div>
                                    </Typography>
                                    <Link to='/our-professions' className="btn btn-pravyla me-2">Опис професій</Link>
                                </div>
                            </Card>
                        </TabPanel>
                        <TabPanel value={1}>
                            <Card className="profession-card">
                                <div className="card-image">
                                    <img
                                    src={Photo2}
                                    loading="lazy"
                                    alt=""
                                    />
                                </div>
                                <div className="card-content">
                                    <Typography className="card-title" id="card-description">
                                    Професії:
                                    </Typography>
                                    <Typography
                                    className="card-text"
                                    aria-describedby="card-description"
                                    component="div" >
                                        <ul>
                                            <li>Провідник пасажирського вагона. Стюард <span>(хлопці та дівчата)</span></li>
                                            <p><i>Термін навчання 10 місяців</i></p>
                                            <li>Машиність тепловоза. Слюсар з ремонту рухомого складу <span>(хлопці)</span></li>
                                            <p><i>Термін навчання 1,5 роки</i></p>
                                        </ul>
                                        <hr />
                                            <div className="quote-block">
                                                <img src={apsheroni} alt="Арістотель" />
                                                <blockquote>
                                                    <p>«Як добре, коли у людини є можливість вибрати собі професію не за потребою, а погодившись з душевними схильностями»</p>
                                                    <footer>Алі Апшероні</footer>
                                                </blockquote>
                                            </div>
                                    </Typography>
                                    <Link to='/our-professions' className="btn btn-pravyla me-2">Опис професій</Link>
                                </div>
                            </Card>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>            
            <Footer/>
        </div>
    )
}