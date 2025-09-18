import './Footer.scss'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom';


//img
import QRInstagram from '../../components/Header/img/QRInstagram.png'
import instagramLogo from '../../components/img/instagramLogo.png'
import facebookLogo from '../../components/img/facebookLogo.png'
import mailLogo from '../../components/img/mailLogo.png'

export default function Footer() {
    const navigate = useNavigate();

    const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h2 className="footer-logo">Здолбунівський професійний коледж</h2>
                    <p className="footer__slogan">Долучайся до нашої онлайн-сім'ї в соцмережах</p>
                    <div className="footer-social">
                        <div className='linkBtn'>
                            <a className="nav-link" href="https://www.instagram.com/zpkpto/"><img className='instagramLogo' src={ instagramLogo } alt="instagramLogo" /></a>
                            <a className="nav-link" href="https://www.facebook.com/zvpuzt/"><img className='instagramLogo' src={ facebookLogo } alt="facebookLogo" /></a>
                            <a className="nav-link" href="#"><img className='mailLogo' src={ mailLogo } alt="mailLogo" /></a>
                        </div>
                    </div>
                    <img src={QRInstagram} alt="QR-код" className="footer-qr" />
                </div>
                <div className="footer-column">
                    <h3>Навігація</h3>
                    <ul>
                        <li><Link to="/news">Новини</Link></li>
                        <li><Link to="/our-professions">Наші професії</Link></li>
                        <li><Link to="/priymalna-komisiya">Приймальна комісія</Link></li>
                        <li><button onClick={handleContactClick}>Зв'язатись з нами</button></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; Створено ЗПК</span>
                <span>Всі права захищено</span>
            </div>
        </footer>
    )
}