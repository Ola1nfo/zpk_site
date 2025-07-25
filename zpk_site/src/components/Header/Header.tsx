import './Header.scss'

import Logo from '../img/logo.png'
import instagramLogo from '../img/instagramLogo.png'
import facebookLogo from '../img/facebookLogo.png'
import mailLogo from '../img/mailLogo.png'

export default function Header() {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="nav-link" href="#"><img className='logo' src={ Logo } alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Про нас
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Наша історія</a></li>
                                    <li><a className="dropdown-item" href="#">Наша символіка</a></li>
                                    <li><a className="dropdown-item" href="#">Адіміністрація</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Новини</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Абітурієнту
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Правила прийому</a></li>
                                    <li><a className="dropdown-item" href="#">Наші професії</a></li>
                                    <li><a className="dropdown-item" href="#">Приймальна комісія</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Навчання
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Розклад дзвінків</a></li>
                                    <li><a className="dropdown-item" href="#">Розклад уроків</a></li>
                                    <li><a className="dropdown-item" href="#">Дистанційне навчання</a></li>
                                    <li><a className="dropdown-item" href="#">НМТ</a></li>
                                    <li><a className="dropdown-item" href="#">PISA</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Виховання
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Гуртки</a></li>
                                    <li><a className="dropdown-item" href="#">Музей</a></li>
                                    <li><a className="dropdown-item" href="#">Класному керівнику</a></li>
                                    <li><a className="dropdown-item" href="#">Газета "Лідер"</a></li>
                                    <li><a className="dropdown-item" href="#">Самоврядування</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <li className="nav-item">
                                <div className='linkBtn'>
                                    <a className="nav-link" href="https://www.instagram.com/zpkpto/"><img className='instagramLogo' src={ instagramLogo } alt="instagramLogo" /></a>
                                    <a className="nav-link" href="https://www.facebook.com/zvpuzt/"><img className='instagramLogo' src={ facebookLogo } alt="facebookLogo" /></a>
                                    <a className="nav-link" href="#"><img className='mailLogo' src={ mailLogo } alt="mailLogo" /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}