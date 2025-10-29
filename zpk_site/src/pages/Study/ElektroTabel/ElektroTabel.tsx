import './ElektroTabel.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function ElektroTabel() {
  return (
    <div className="elektroTabel-page">
      <Header />

      <main className="under-construction">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="gear"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            ⚙️
          </motion.div>
          <h1>Сторінка в розробці</h1>
          <p>Ми працюємо над тим, щоб незабаром тут з’явився корисний контент!</p>
          <div className="loading-bar">
            <div className="progress"></div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
