import "./Prezentatsii.scss";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Presentation, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// презентації
import Pylypchuk from "./pdf/Pylypchuk.pdf";
import Shevchuk from "./pdf/Shevchuk.pdf";
import Sitovska from "./pdf/Sitovska.pdf";
import Nyzhnyk from "./pdf/Nyzhnyk.pdf";
import Hrytsak from "./pdf/Hrytsak.pdf";
import Bogatyreva from "./pdf/Bogatyreva.pdf";
import Davydiuk from "./pdf/Davydiuk.pdf";
import Gudzalov from "./pdf/Gudzalov.pdf";
import Korchynska from "./pdf/Korchynska.pdf";
import Romanovskiy from "./pdf/Romanovskiy.pdf";
import Romaniuk from "./pdf/Romaniuk.pdf";
import Shevchenko from "./pdf/Shevchenko.pdf";
import Yakubchyk from "./pdf/Yakubchyk.pdf";
import Vasyanovych from "./pdf/Vasyanovych.pdf";
import Bondar from "./pdf/Bondar.pdf";
import Filyuk from "./pdf/Filyuk.pdf";

export default function Prezentatsii() {

  const teachers = [
    { name: "Пилипчук Ірина", subject: "Бібліотекар", presentation: Pylypchuk },
    { name: "Шевчук Оксана", subject: "Майстер виробничого навчання", presentation: Shevchuk },
    { name: "Сітовська Наталія", subject: "Вихователь гуртожитку", presentation: Sitovska },
    { name: "Нижник Тетяна", subject: "Викладач біології і екології", presentation: Nyzhnyk },
    { name: "Грицак Сергій", subject: "Майстер виробничого навчання", presentation: Hrytsak },
    { name: "Гудзалов Іван", subject: "Викладач фізики і астрономії", presentation: Gudzalov },
    { name: "Давидюк Ірина", subject: "Викладач української мови та літератури", presentation: Davydiuk },
    { name: "Корчинська Ольга", subject: "Викладач математики, фізика та астрономії", presentation: Korchynska },
    { name: "Романовський Сергій", subject: "Майстер виробничого навчання", presentation: Romanovskiy },
    { name: "Романюк Ольга", subject: "Викладач економіки", presentation: Romaniuk },
    { name: "Шевченко Людмила", subject: "Вихователь гуртожитку", presentation: Shevchenko },
    { name: "Якубчик Валентина", subject: "Практичний психолог", presentation: Yakubchyk },
    { name: "Богатирьова Тетяна", subject: "Викладач іноземної мови", presentation: Bogatyreva },
    { name: "Васянович Василь", subject: "Викладач спецдисциплін залізничного профілю", presentation: Vasyanovych },
    { name: "Бондар Володимир", subject: "Майстер виробничого навчання", presentation: Bondar },
    { name: "Філюк Інна", subject: "Викладач математики", presentation: Filyuk },
  ];

  return (
    <div className="presentations-page">
      <Header />

      <main className="presentations-main">

        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Презентації педагогічних працівників (2026)
        </motion.h1>

        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <motion.a
              key={index}
              href={teacher.presentation}
              target="_blank"
              rel="noopener noreferrer"
              className="teacher-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Presentation size={40} className="presentation-icon" />
              <h3>{teacher.name}</h3>
              <p>{teacher.subject}</p>
              <span className="btn-view">Переглянути презентацію</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="back-link"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/atestasia" className="btn-back">
            <ArrowLeft size={20} /> Назад
          </Link>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}