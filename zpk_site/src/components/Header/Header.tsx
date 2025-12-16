import './Header.scss'
import { Link } from 'react-router'

import Logo from '../img/logo.png'


export default function Header() {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="logo" />
                    </Link>
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
                                    <li>
                                        <Link className="dropdown-item" to="/administration">Адіміністрація</Link>
                                    </li>
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
                                        <Link className="dropdown-item" to="/ogoloshennya-dlya-abituriientiv">Оголошення для абітурієнтів</Link>
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
                                    <li>
                                        <Link className="dropdown-item" to="/electro-tabel">Електронний табель</Link>
                                    </li>
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
                                        <Link className="dropdown-item" to="/klasnyy-kerivnyk">Класному керівнику</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/newspaper-lider">Газета "Лідер"</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/samovryaduvannya">Самоврядування</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/gyrtky">Гуртки</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/museum">Музей</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Методика
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="/metodyka-porady">Методичні поради</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/normatyvna-baza">Нормативно-правова база</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/atestasia">Атестація</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pablic-info">Публічна інформація</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/psycholog">Сторінка психолога</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/video">Відеогалерея</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/career-center">Центр кар'єри</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}