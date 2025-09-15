import './Header.scss'
import { Link } from 'react-router'

import Logo from '../img/logo.png'


export default function Header() {

    return (
        <header className="container header">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="logo" />
                    </Link>
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
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    )
}