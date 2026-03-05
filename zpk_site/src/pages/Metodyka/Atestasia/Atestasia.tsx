import './Atestasia.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

//docs
import information from './docs/information.pdf';
import grafikRobotu from './docs/grafik robotu.pdf';
import skladKomisii from './docs/sklad komisii.pdf';
import spusokChergovo from './docs/spusok chergovo.pdf';
import pozachergova from './docs/pozachergova.pdf'

export default function Atestasia() {
  const documents = [
    { title: "Інформація", link: information, type: "file" },
    { title: "Графік роботи атестаційної комісії", link: grafikRobotu, type: "file" },
    { title: "Список чергової атестації", link: spusokChergovo, type: "file" },
    { title: "Персональний склад атестаційної комісії", link: skladKomisii, type: "file" },
    { title: "Список позачергової атестації", link: pozachergova, type: "file" },
  ];

  const presentations = [
    { title: "Презентації педагогічних працівників (2026)", link: "/atestasia/prezentatsii/prezentatsii", type: "page" },
  ];

  return (
    <div className="atestasia-page">
      <Header />

      <main className="atestasia-main">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Атестація педагогічних працівників
        </motion.h1>

        <h2 className="section-title">Документи</h2>
        <div className="documents-grid">
          {documents.map((doc, index) => (
            <motion.a
              key={index}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="document-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <FileText className="doc-icon" size={42} />
              <h3>{doc.title}</h3>
            </motion.a>
          ))}
        </div>

        <h2 className="section-title">Презентації педагогічних працівників</h2>
        <div className="documents-grid">
          {presentations.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Link to={doc.link} className="document-card">
                <FileText className="doc-icon" size={42} />
                <h3>{doc.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}