import './Gyrtky.scss';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

//img
import gyrtky1 from './img/gyrtky1.png';
import gyrtky2 from './img/gyrtky2.png';
import gyrtky3 from './img/gyrtky3.png';

export default function Gyrtky() {
  return (
    <div className="gyrtky-page">
      <Header />

      <div className="gyrtky-content">
        <img src={gyrtky1} alt="Гурток 1" />
        <img src={gyrtky2} alt="Гурток 2" />
        <img src={gyrtky3} alt="Гурток 3" />
      </div>

      <Footer />
    </div>
  );
}
