import './ElektroTabel.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

type Group = {
  id: number;
  name: string;
  img: string;
};

export default function ElektroTabel() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const groups: Group[] = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    name: `Група ${i + 1}`,
    img: `/img/group${i + 1}.png`,
  }));

  return (
    <div className="elektroTabel-page">
      <Header />

      <main className="tabel-gallery">
        <h1>Оцінки студентів</h1>

        <div className="grid">
          {groups.map(group => (
            <motion.div
              key={group.id}
              className="group-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: group.id * 0.05 }}
            >
              <img src={group?.img} alt={group?.name} />
              <p>{group?.name}</p>
              <button onClick={() => setActiveImage(group?.img)}>
                Переглянути оцінки
              </button>
            </motion.div>
          ))}
        </div>

        {activeImage && (
          <div className="overlay" onClick={() => setActiveImage(null)}>
            <img
              className="overlay-img"
              src={activeImage}
              alt="Оцінки групи"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-btn" onClick={() => setActiveImage(null)}>
              Закрити
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
