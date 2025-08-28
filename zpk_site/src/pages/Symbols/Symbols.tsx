import "./Symbols.scss";

import flag from "./img/flag.jpg";
import logo from "./img/logo.png";
import sport from "./img/sport.png";
import council from "./img/council.png";

const symbols = [
  { img: flag, title: "Прапор" },
  { img: logo, title: "Шеврон" },
  { img: sport, title: "Спортивна спілка" },
  { img: council, title: "Учнівське самоврядування" },
];

export default function Symbols() {
  return (
    <section className="symbols">
      <h2 className="symbols__title">Символіка</h2>
      <div className="symbols__grid">
        {symbols.map((s, i) => (
          <div className="symbols__item" key={i}>
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
