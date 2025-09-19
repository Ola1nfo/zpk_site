import './MetodykaPorady.scss';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Header/Header';

// Імпорт PDF файлів
import pdf1 from '../MetodykaPorady/pdf/porada1.pdf';
import pdf2 from '../MetodykaPorady/pdf/porada2.pdf';
import pdf3 from '../MetodykaPorady/pdf/porada3.pdf';
import pdf4 from '../MetodykaPorady/pdf/porada4.pdf';

export default function MetodykaPorady() {
    const pdfFiles = [
        { title: "Онлайн ресурси дистанційного навчання", file: pdf1 },
        { title: "Поради молодим викладач", file: pdf2 },
        { title: "Поради молодому майтру виробничого навчання", file: pdf3 },
        { title: "Урок виробничого навчання", file: pdf4 },
    ];

    return (
        <div>
            <Headers />
            <div className="pdf-buttons-container">
                <h2>Методичні поради</h2>
                {pdfFiles.map((pdf, index) => (
                    <button
                        key={index}
                        className="pdf-button"
                        onClick={() => window.open(pdf.file, "_blank")}
                    >
                        {pdf.title}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    );
}
