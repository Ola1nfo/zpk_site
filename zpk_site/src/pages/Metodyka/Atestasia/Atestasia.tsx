import './Atestasia.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

//docs
import information from './docs/information.pdf';
import grafikRobotu from './docs/grafik robotu.pdf';
import skladKomisii from './docs/sklad komisii.pdf';
import spusokChergovo from './docs/spusok chergovo.pdf';
import pozachergova from './docs/pozachergova.pdf'

export default function Atestasia() {
  const documents = [
    {
      title: "Інформація",
      link: information,
    },
    {
      title: "Графік роботи атестаційної комісії",
      link: grafikRobotu,
    },
    {
      title: "Список чергової атестації",
      link: spusokChergovo,
    },
    {
      title: "Персональний склад атестаційної комісії",
      link: skladKomisii,
    },
    {
      title: "Список позачергової атестації",
      link: pozachergova,
    },
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
      </main>

      <Footer />
    </div>
  );
}
