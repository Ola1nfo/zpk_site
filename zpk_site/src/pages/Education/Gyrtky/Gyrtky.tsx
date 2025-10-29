import './Gyrtky.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Gyrtky() {
  return (
    <div className="gyrtky-page">
      <Header />

      <main className="under-construction">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="icon"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            🎨
          </motion.div>
          <h1>Розділ "Гуртки" в розробці</h1>
          <p>Ми готуємо для тебе цікаву інформацію про гуртки, творчі студії та позаурочні заходи коледжу.</p>

          <div className="loading-bar">
            <div className="progress"></div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
