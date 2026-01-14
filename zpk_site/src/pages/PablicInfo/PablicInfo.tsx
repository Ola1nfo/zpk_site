import './PablicInfo.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//PDF
import pablicPdf1 from './pdf/pablicPdf1.pdf'
import pablicPdf2 from './pdf/pablicPdf2.pdf'
import pablicPdf3 from './pdf/pablicPdf3.pdf'
import pablicPdf4 from './pdf/pablicPdf4.pdf'
import pablicPdf5 from './pdf/pablicPdf5.pdf'
import pablicPdf6 from './pdf/pablicPdf6.pdf'
import pablicPdf7 from './pdf/pablicPdf7.pdf'
import pablicPdf8 from './pdf/pablicPdf8.pdf'
import pablicPdf9 from './pdf/pablicPdf9.pdf'
import pablicPdf10 from './pdf/pablicPdf10.pdf'
import pablicPdf11 from './pdf/pablicPdf11.pdf'
import pablicPdf12 from './pdf/pablicPdf12.pdf'
import pablicPdf13 from './pdf/pablicPdf13.pdf'
import pablicPdf14 from './pdf/pablicPdf14.pdf'
import pablicPdf15 from './pdf/pablicPdf15.pdf'
import pablicPdf16 from './pdf/pablicPdf16.pdf'
import pablicPdf17 from './pdf/pablicPdf17.pdf'
import pablicPdf18 from './pdf/pablicPdf18.pdf'
import pablicPdf19 from './pdf/pablicPdf19.pdf'
import pablicPdf20 from './pdf/pablicPdf20.pdf'
import pablicPdf21 from './pdf/pablicPdf21.pdf'
import pablicPdf22 from './pdf/pablicPdf22.pdf'

// іконки
import iconLink from './img/icon1.png'
import iconPdf from './img/icon2.png'

export default function PablicInfo() {
    const documents = [
        { title: "Про затвердження Порядку реагування на випадки насильства та жорстокого поводження з дітьми", file: pablicPdf22, type: "pdf" },
        { title: "Звіт директора 2025 р.", file: pablicPdf1, type: "pdf" },
        { title: `Закон України "Про доступ до публічної інформації"`, file: "https://zakon.rada.gov.ua/laws/show/2939-17#Text", type: "link" },
        { title: "Статут ДНЗ 'Здолбунівське ВПУЗТ'", file: pablicPdf2, type: "pdf" },
        { title: "Ліцензії на провадження освітньої діяльності", file: pablicPdf3, type: "pdf" },
        { title: "Мова освітнього процесу", file: pablicPdf4, type: "pdf" },
        { title: "Наявність вакантних посад", file: pablicPdf5, type: "pdf" },
        { title: "Свідоцтво про атестацію", file: pablicPdf6, type: "pdf" },
        { title: "Річний звіт про діяльність закладу 2025", file: pablicPdf7, type: "pdf" },
        { title: "Правила прийому на 2026 рік", file: pablicPdf8, type: "pdf" },
        { title: "Розмір плати за навчання", file: pablicPdf9, type: "pdf" },
        { title: "План заходів щодо протидії булінгу", file: pablicPdf10, type: "pdf" },
        { title: "Порядок подання заяв про булінг", file: pablicPdf11, type: "pdf" },
        { title: "Порядок реагування на булінг", file: pablicPdf12, type: "pdf" },
        { title: "Кошторис 2025", file: pablicPdf13, type: "pdf" },
        { title: "Фінансова звітність", file: pablicPdf14, type: "pdf" },
        { title: "Ліцензований обсяг та кількість учнів", file: "https://registry.edbo.gov.ua/university/2095/professions/", type: "link" },
        { title: "Матеріально-технічне забезпечення", file: pablicPdf15, type: "pdf" },
        { title: "Моніторинги якості освіти", file: pablicPdf16, type: "pdf" },
        { title: "Кадровий склад", file: pablicPdf17, type: "pdf" },
        { title: "Інформація про тендерні процедури", file: "https://prozorro.gov.ua/uk/search/tender?text=02547122", type: "link" },
        { title: "Перелік додаткових освітніх послуг", file: pablicPdf18, type: "pdf" },
        { title: "Правила поведінки учнів", file: pablicPdf19, type: "pdf" },
        { title: "План підвищення кваліфікації педагогів", file: pablicPdf20, type: "pdf" },
        { title: "Договір оренди", file: pablicPdf21, type: "pdf" }
    ]

    return (
        <div>
            <Header />
            <div className="container public-info">
                <h2 className="title">Публічна інформація</h2>
                <p className="subtitle">Мова освітнього процесу у навчальному закладі – українська</p>

                <div className="document-grid">
                    {documents.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="document-card"
                        >
                            <img
                                src={doc.type === "pdf" ? iconPdf : iconLink}
                                alt={doc.type}
                                className="doc-icon"
                            />
                            <span>{doc.title}</span>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
