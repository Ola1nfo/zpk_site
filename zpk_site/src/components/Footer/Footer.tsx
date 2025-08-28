import './Footer.scss'

//img
import QRInstagram from '../../components/Header/img/QRInstagram.png'
import instagramLogo from '../../components/img/instagramLogo.png'
import facebookLogo from '../../components/img/facebookLogo.png'
import mailLogo from '../../components/img/mailLogo.png'

export default function Footer() {
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
                        <li><a href="#">Новини</a></li>
                        <li><a href="#">Наші професії</a></li>
                        <li><a href="#">Приймальна комісія</a></li>
                        <li><a href="#">Зв'язатись з нами</a></li>
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