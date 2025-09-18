import './Home.scss'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

//img
import Logo from '../../components/img/logo.png'
import instagramLogo from '../../components/img/instagramLogo.png'
import facebookLogo from '../../components/img/facebookLogo.png'
import mailLogo from '../../components/img/mailLogo.png'
import icon1 from '../../components/Header/img/icon1.png'
import icon2 from '../../components/Header/img/icon2.png'
import icon3 from '../../components/Header/img/icon3.png'
import icon4 from '../../components/Header/img/icon4.png'
import icon5 from '../../components/Header/img/icon5.png'
import icon6 from '../../components/Header/img/icon6.png'
import icon7 from '../../components/Header/img/icon7.png'
import icon8 from '../../components/Header/img/icon8.png'
import icon9 from '../../components/Header/img/icon9.png'
import icon10 from '../../components/Header/img/icon10.png'
import icon11 from '../../components/Header/img/icon11.png'
import icon12 from '../../components/Header/img/icon12.png'
import imgProvidnuk from '../../components/Header/img/rovidnuk.jpg'
import imgMashunist11 from '../../components/Header/img/mashunist11.jpg'
import imgMashunist9 from '../../components/Header/img/mashunist9.jpg'
import imgSlusar from '../../components/Header/img/slusar.jpg'
import imgPerukar from '../../components/Header/img/perukar.jpg'
import imgMontashnuk from '../../components/Header/img/montashnuk.jpg'
import imgOperatorDron from '../../components/Header/img/operatorDron.jpg'
import imgDerevoobrobnuk from '../../components/Header/img/derevoobrobnuk.jpg'

const advantages = [
  { icon: icon1, label: 'актуальні професії' },
  { icon: icon2, label: 'вступ без НМТ' },
  { icon: icon3, label: 'безкоштовне навчання' },
  { icon: icon4, label: 'безкоштовний гуртожиток' },
  { icon: icon5, label: 'гарантована стипендія' },
  { icon: icon6, label: 'педагоги-професіонали' },
  { icon: icon7, label: 'індивідуальний підхід' },
  { icon: icon8, label: 'сучасна матеріальна база' },
  { icon: icon9, label: 'творче дозвілля' },
  { icon: icon10, label: 'професійна підготовка' },
  { icon: icon11, label: 'практичне навчання' },
  { icon: icon12, label: 'успішне працевлаштування' },
]

const professions = [
  {
    title: 'Провідник пасажирського вагона',
    description: 'Це спеціаліст, який супроводжує пасажирів у поїздах, забезпечує їх комфорт та безпеку під час подорожі. Провідник контролює квитки, стежить за порядком у вагоні, допомагає пасажирам та відповідає за технічний стан вагона.',
    image: imgProvidnuk,
  },
  {
    title: 'Машиніст тепловоза. Слюсар з ремонту рухомого складу',
    description: 'Фахівець, який керує тепловозом, відповідає за безпечне перевезення вантажів і пасажирів залізницею. Проводить технічне обслуговування та ремонт вагонів і локомотивів, забезпечуючи їх справність та безпечну експлуатацію.',
    image: imgMashunist11,
  },
  {
    title: 'Машиніст тепловоза. Машиніст електровоза. Слюсар з ремонту рухомого складу',
    description: 'Фахівець, який керує тепловозом та електровозом, відповідає за безпечне перевезення вантажів і пасажирів залізницею. Проводить технічне обслуговування та ремонт вагонів і локомотивів, забезпечуючи їх справність та безпечну експлуатацію.',
    image: imgMashunist9,
  },
  {
    title: 'Слюсар-ремонтник. Слюсар з ремонту рухомого складу. Оглядач вагонів',
    description: 'Фахівець, який займається оглядом, технічним обслуговуванням і ремонтом залізничних вагонів. Виявляє та усуває несправності, контролює технічний стан колісних пар, гальмівної системи та кузова, забезпечуючи безпечну експлуатацію рухомого складу.',
    image: imgSlusar,
  },
  {
    title: 'Перукар (перукар-модельєр). Манікюрник',
    description: 'Фахівець з краси, який створює сучасні зачіски, виконує стрижки, фарбування волосся, а також доглядає за нігтями. Володіє навичками манікюру, стилізації образу та знається на модних трендах, допомагаючи клієнтам виглядати стильно та доглянуто.',
    image: imgPerukar,
  },
  {
    title: 'Монтажник систем утеплення будівель. Опоряджувальник будівельний. Монтажник санітарно-технічних систем та устаткування',
    description: 'Фахівець, що виконує утеплення будівель, оздоблювальні роботи та встановлює системи водопостачання, опалення і каналізації для комфортного та енергоефективного приміщення.',
    image: imgMontashnuk,
  },
  {
    title: 'Оператор з обробки інформації та програмного забезпечення. Оператор дистанційно керованих апаратів',
    description: 'Фахівець, який працює з комп’ютерними програмами для обробки даних та керує дистанційними пристроями й апаратурою для виконання технічних завдань і контролю процесів.',
    image: imgOperatorDron,
  },
  {
    title: 'Деревообробник будівельник. Оператор з обробки інформації та програмного забезпечення',
    description: 'Спеціалісти, які виконують роботи з обробки деревини для будівництва та обробляють інформацію за допомогою комп’ютерних програм для підтримки технічних і виробничих процесів.',
    image: imgDerevoobrobnuk,
  },
  
];

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const position: [number, number] = [50.52158, 26.25582]; 

function FlyToMarker() {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, 17, {
      animate: true,
      duration: 1.5,
    });
  };

  return (
    <div className="map-address-label" onClick={handleClick}>
      Рівненська обл., м. Здолбунів, вул. Ясна, 6
    </div>
  );
}

export default function Home() {
    
    const [index, setIndex] = useState(0);
    const prev = () => {setIndex((prev) => (prev > 0 ? prev - 1 : 0))}
    const next = () => {setIndex((prev) => prev + 3 < professions.length ? prev + 1 : prev)}
    const cardWidth = 345; 
    const gap = 30;   

    return (
        <div className=''>
            <header className="headerHome">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="#"><img className='logo' src={Logo} alt="logo" /></a>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Про нас
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/history">Наша історія</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/symbols">Наша символіка</Link>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Адіміністрація</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news">Новини</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Абітурієнту
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/admission-rules">Правила прийому</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/our-professions">Наші професії</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/priymalna-komisiya">Приймальна комісія</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/admission-rules">Оголошення для убітурієнтів</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Навчання
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/rozklad-dzvinkiv">Розклад дзвінків</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/rozklad-urokiv">Розклад уроків</Link>
                                        </li>
                                        <li><a className="dropdown-item" href="#">НМТ</a></li>
                                        <li>
                                            <Link className="dropdown-item" to="/PISA">PISA</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Виховання
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/museum">Музей</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/klasnyy-kerivnyk">Класному керівнику</Link>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Газета "Лідер"</a></li>
                                        <li>
                                            <Link className="dropdown-item" to="/samovryaduvannya">Самоврядування</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Методика
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Методичні поради</a></li>
                                        <li><a className="dropdown-item" href="#">Нормативно-правова база</a></li>
                                        <li><a className="dropdown-item" href="#">Атестація</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Публічна інформація</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Сторінка психолога</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Відеогалерея</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Центр кар'єри</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="hero-section">
                <div className="overlay"></div>
                <div className="hero-content text-center text-white">
                    <h1>Здолбунівський професійний коледж</h1>
                    <p>З НАМИ ЦІКАВО, ТВОРЧО, ПРОФЕСІЙНО!<br />ПРИЄДНУЙСЯ!</p>
                    <div className='linkBtn'>
                        <a className="nav-link" href="https://www.instagram.com/zpkpto/"><img className='instagramLogo' src={ instagramLogo } alt="instagramLogo" /></a>
                        <a className="nav-link" href="https://www.facebook.com/zvpuzt/"><img className='instagramLogo' src={ facebookLogo } alt="facebookLogo" /></a>
                        <a className="nav-link" href="#"><img className='mailLogo' src={ mailLogo } alt="mailLogo" /></a>
                    </div>
                    <div className="hero-buttons">
                        <a href="#" className="btn btn-zaiva me-2">Подати заяву онлайн</a>
                        <a href="tel:0970910740" className="btn btn-phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg> 098 52 37 494</a>
                    </div>

                    <div className="hero-secondary-buttons mt-3">
                        <a href="#" className="btn btn-secondary me-2">Віртуальна екскурсія</a>
                        <a href="#" className="btn btn-secondary">Запрошуємо на навчання</a>
                    </div>
                </div>
            </div>
            <section className="green-carousel-section">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center align-items-center green-slide">
                                <div className="carousel-caption text-white">
                                    <h2>Вступна кампанія - 2025 у розпалі!</h2>
                                    <p>Запрошуємо до нас на навчання</p>
                                    <Link className="btn btn-dark mt-3" to="/our-professions">Ознайомитися з професіями</Link>
                                </div>          
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center green-slide">
                                <div className="carousel-caption text-white">
                                    <h2>Приймальна комісія</h2>
                                    <p>Чекаємо на вступників з повним пакетом докумнетів</p>
                                    <Link className="btn btn-dark mt-3" to="/priymalna-komisiya">Дізнатися більше</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center green-slide">
                                <div className="carousel-caption text-white">
                                    <h2>Оголошення для абітурієнтів</h2>
                                    <p>Актуальна інформація для Вас</p>
                                    <a className="btn btn-dark mt-3" href="#">Детальніше</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center green-slide">
                                <div className="carousel-caption text-white">
                                    <h2>День відкритих дверей</h2>
                                    <p>Із нетерпінням очікуємо наступної зустрічі з Вами</p>
                                    <a className="btn btn-dark mt-3" href="#">Дізнатися більше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="advantages-section">
                <div className="container text-center">
                    <h2>12 переваг здобувати освіту в нашому закладі освіти</h2>
                    <p className="subtitle">Ще не обрали освітній заклад? Тоді ці 12 фактів варті твоєї уваги!</p>
                    <div className="row justify-content-center">
                    {advantages.map((adv, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-3 advantage-item">
                        <img src={adv.icon} alt={adv.label} />
                        <p>{adv.label}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <section className="chooseProfessionBlock container py-4">
                <h2 className="text-center mb-4">Обирай свою професію</h2>
                <div className="slider-controls d-flex justify-content-center align-items-center gap-3 flex-nowrap">
                    <button className="btn btn-link nav-btn left p-2" onClick={prev} aria-label="Попередній">
                        <ArrowBackIos />
                    </button>
                    <div
                    className="slider-window overflow-hidden"
                    style={{
                        width: `${cardWidth * 3 + gap * 2}px`, 
                        boxSizing: 'border-box'
                    }}
                    >
                        <div
                            className="slider-track d-flex"
                            style={{
                            gap: `${gap}px`,
                            transform: `translateX(-${index * (cardWidth + gap)}px)`,
                            transition: 'transform 0.5s ease-in-out',
                            width: `${professions.length * (cardWidth + gap) - gap}px`,
                            boxSizing: 'border-box'
                            }}
                        >
                            {professions.map((prof, i) => (
                                <Card
                                    key={i}
                                    sx={{
                                    flexShrink: 0,
                                    width: `${cardWidth}px`,
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={prof.image}
                                            alt={prof.title}
                                            sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {prof.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {prof.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Детальніше
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <button className="btn btn-link nav-btn right p-2" onClick={next} aria-label="Наступний">
                        <ArrowForwardIos />
                    </button>
                </div>
            </section>
            <section className="newsEventsBlock container py-5">
                <h2 className="text-center text-white py-3 bg-blue rounded">Останні новини та анонси подій</h2>
                <div className="row mt-4 gy-4">
                    <div className="col-lg-8">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="news-card">
                                    <img src="image1.jpg" alt="Вручення документів" className="img-fluid rounded" />
                                    <h5 className="mt-3 fw-bold">Запрошуємо на навчання</h5>
                                    <p className="text-muted small">
                                    
                                    </p>
                                    <a href="#" className="text-decoration-underline small">Читати більше</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news-card">
                                    <img src="image2.jpg" alt="Атестація" className="img-fluid rounded" />
                                    <h5 className="mt-3 fw-bold">В добру путь, наші вступники!</h5>
                                    <p className="text-muted small">
                                    У ДНЗ «Здолбунівське вище професійне училище залізничного транспорту» відбувся випуск п’ятьох груп: №5, №6, №10, №11 та №13.
                                    </p>
                                    <a href="#" className="text-decoration-underline small">Читати більше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="custom-underline">Анонси подій</h5>
                        <ul className="list-unstyled event-list">
                            <li className="d-flex gap-3">
                                <div className="date-circle small-text">
                                    <strong>Червень–серпень</strong>
                                </div>
                                <div>
                                    <p className="mb-1 fw-bold">Прийом заяв та документів від вступників</p>
                                    <p className="mb-0 text-muted small">Червень–серпень 2025 року<br />● Приймальна комісія коледжу</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="instagramPromo py-4">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
                    <div>
                        <h3 className="fw-bold mb-2">Хочеш дізнатися про нас детальніше?</h3>
                        <p className="mb-0 text-white fw-bold">Заглянь на нашу сторінку в Інстаграм!</p>
                    </div>
                    <a
                    href="https://www.instagram.com/zpkpto/"
                    className="btn btn-success d-flex align-items-center gap-2 mt-3 mt-md-0 px-4 py-2 rounded-pill"
                    >
                    <i className="bi bi-instagram fs-5"></i> Перейти до інстаграму
                    </a>
                </div>
            </section>
            <section id='contact' className="contactsFormBlock py-5">
                <div className="container">
                    <div className="row align-items-center g-4">
                    <div className="col-lg-6 text-white">
                        <h2 className="fw-bold mb-3">Свої мрії втілюй у нашому коледжі!</h2>
                        <p className="mb-4">У нас створені усі необхідні умови для отримання якісних освітніх послуг</p>
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item me-4">
                                <i className="bi bi-check-circle"></i> Вступ без НМТ
                            </li>
                            <li className="list-inline-item me-4">
                                <i className="bi bi-check-circle"></i> Гуртожиток
                            </li>
                            <li className="list-inline-item">
                                <i className="bi bi-check-circle"></i> Безкоштовне навчання
                            </li>
                        </ul>
                        <h5 className="fw-bold mb-3">Наші контакти</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-3">
                                <span className="icon-circle me-3"><i className="bi bi-telephone-fill"></i></span>
                                <span>Приймальна комісія <br /><strong>098 523 74 94</strong></span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <span className="icon-circle me-3"><i className="bi bi-envelope-fill"></i></span>
                                <span>Електронна адреса <br /><strong>zplzt@ukr.net</strong></span>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="icon-circle me-3"><i className="bi bi-geo-alt-fill"></i></span>
                                <span>Україна, Рівненська обл., м. Здолбунів, вул. Ясна, 6</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-box p-4 rounded">
                        <h4 className="text-white mb-2">Виникли запитання?</h4>
                        <p className="text-white-50 mb-4">Заповни форму нижче, і ми відповімо!</p>
                        <form>
                            <input type="text" placeholder="Ваше ім'я" className="form-control mb-3" />
                            <input type="tel" placeholder="Ваш номер телефону" className="form-control mb-3" />
                            <button type="submit" className="btn btn-success w-100">Надіслати</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="custom-map-container">
                <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="map">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        Рівненська обл., м. Здолбунів<br />вул. Ясна, 6
                    </Popup>
                    </Marker>
                    <FlyToMarker />
                </MapContainer>
            </div>
            <Footer />

        </div>      
    )
}