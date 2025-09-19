import './NormatyvnaBaza.scss';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Header/Header';

//pdf
import pdf1 from './pdf/Організація НМР.pdf'


export default function NormatyvnaBaza() {
    const links = [
        { title: `Закон України "Про освіту"`, url: "https://zakon.rada.gov.ua/laws/show/2145-19#Text" },
        { title: `Закон України "Про професійну (професійно-технічну) освіту"`, url: "https://zakon.rada.gov.ua/laws/show/103/98-%D0%B2%D1%80#Text" },
        { title: `Закон України "Про внесення змін до деяких законодавчих актів України з питань професійно-технічної освіти"`, url: "https://zakon.rada.gov.ua/laws/show/1158-15#Text" },
        { title: `Закон України "Про ліцензування видів господарської діяльності"`, url: "https://zakon.rada.gov.ua/laws/show/222-19#Text" },
        { title: `Розпорядження КМУ "Про схвалення Концепції реалізації державної політики у сфері професійної (професійно-технічної) освіти “Сучасна професійна (професійно-технічна) освіта” на період до 2027 року`, url: "https://zakon.rada.gov.ua/laws/show/419-2019-%D1%80#Text" },
        { title: `Розпорядження КМУ Про затвердження плану заходів на 2020-2027 роки із запровадження Концепції реалізації державної політики у сфері професійної (професійно-технічної) освіти “Сучасна професійна (професійно-технічна) освіта” на період до 2027 року`, url: "https://zakon.rada.gov.ua/laws/show/508-2020-%D1%80#Text" },
        { title: `Про Національну стратегію розвитку освіти в Україні на період до 2021 року`, url: "https://zakon.rada.gov.ua/laws/show/344/2013#Text" },
        { title: `Про затвердження Положення про організацію навчально-виробничого процесу у професійно-технічних навчальних закладах`, url: "https://zakon.rada.gov.ua/laws/show/z0711-06#Text" },
        { title: `Про удосконалення методичної роботи в системі професійно-технічної освіти`, url: "https://osvita.ua/legislation/proftech/3306/" },
        { title: `Про затвердження Положення про порядок здійснення інноваційної освітньої діяльності`, url: "https://zakon.rada.gov.ua/laws/show/z0946-00#Text" },
        { title: `Про затвердження Порядку надання навчальній літературі, засобам навчання і навчальному обладнанню грифів та свідоцтв Міністерства освіти і науки України`, url: "https://zakon.rada.gov.ua/laws/show/z0628-08#Text" },
        { title: `Організація науково-методичної роботи в ПТНЗ`, url: "" },
        { title: `Положення про методичну роботу в професійно-технічному навчальному закладі`, file: pdf1 },
        { title: `Інтернет-сервіси в освіті`, url: "https://xmarapto.blogspot.com/p/blog-page_23.html" },
    ];

    return (
        <div>
            <Headers />
            <div className="pdf-buttons-container">
                <h2>Нормативно правова база</h2>
                {links.map((link, index) => (
                    <button
                        key={index}
                        className="pdf-button"
                        onClick={() => window.open(link.url, "_blank")}
                    >
                        {link.title}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    );
}
