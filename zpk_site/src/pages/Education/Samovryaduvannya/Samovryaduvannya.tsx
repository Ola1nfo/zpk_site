import './Samovryaduvannya.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

// імпорт картинок
import logo from '../../../components/img/logo.png';
import history from '../../../components/img/logo.png';
import activity from '../../../components/img/logo.png';

export default function Samovryaduvannya() {
    const items = [
        { img: logo, title: "СИМВОЛІКА", link: "/samovryaduvannya/symbol" },
        { img: history, title: "ІСТОРІЯ САМОВРЯДУВАННЯ", link: "/samovryaduvannya/history" },
        { img: activity, title: "ЗМІСТ ДІЯЛЬНОСТІ", link: "/samovryaduvannya/activity" }
    ];

    return (
        <div>
            <Header />
            <div className="container samovryad-page">
                <h2>Самоврядування</h2>

                <div className="cards-grid">
                    {items.map((item, index) => (
                        <a key={index} href={item.link} className="card">
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
