import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css';
import Home from "./pages/Home/Home"
import History from './pages/AboutUs/History/History'
import Symbols from "./pages/AboutUs/Symbols/Symbols"
import AdmissionRules from "./pages/Abituriyentu/AdmissionRules/AdmissionRules"
import OurProfessions from "./pages/Abituriyentu/OurProfessions/OurProfessions";
import News from "./pages/News/News";
import PriymalnaKomisiya from "./pages/Abituriyentu/PriymalnaKomisiya/PriymalnaKomisiya";
import RozkladDzvinkiv from "./pages/Study/RozkladDzvinkiv/RozkladDzvinkiv";
import RozkladUrokiv from "./pages/Study/RozkladUrokiv/RozkladUrokiv"
import RozkladGroup from './pages/Study/RozkladUrokiv/RozkladGroup';
import PISA from "./pages/Study/PISA/PISA"
import Museum from "./pages/Education/Museum/Museum"
import KlasnyyKerivnyk from "./pages/Education/KlasnyyKerivnyk/KlasnyyKerivnyk"
import Samovryaduvannya from "./pages/Education/Samovryaduvannya/Samovryaduvannya"
import OgoloshennyaDlyaAbituriientiv from "./pages/Abituriyentu/OgoloshennyaDlyaAbituriientiv/OgoloshennyaDlyaAbituriientiv"
import NewspaperLider from "./pages/Education/NewspaperLider/NewspaperLider";
import MetodykaPorady from "./pages/Metodyka/MetodykaPorady/MetodykaPorady";
import NormatyvnaBaza from "./pages/Metodyka/NormatyvnaBaza/NormatyvnaBaza"
import PablicInfo from "./pages/PablicInfo/PablicInfo"
import Psycholog from "./pages/Psycholog/Psycholog"
import Bullying from "./pages/Psycholog/pages/Bullying"
import War from "./pages/Psycholog/pages/War"
import Trafficking from "./pages/Psycholog/pages/Trafficking"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/symbols' element={<Symbols />}/>
        <Route path='/admission-rules' element={<AdmissionRules />}/>
        <Route path='/our-professions' element={<OurProfessions />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/priymalna-komisiya' element={<PriymalnaKomisiya />}/>
        <Route path='/rozklad-dzvinkiv' element={<RozkladDzvinkiv />}/>
        <Route path='/rozklad-urokiv' element={<RozkladUrokiv />}/>
        <Route path="/rozklad/:groupId" element={<RozkladGroup />} />
        <Route path="/PISA" element={<PISA />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/klasnyy-kerivnyk" element={<KlasnyyKerivnyk />} />
        <Route path="/samovryaduvannya" element={<Samovryaduvannya />} />
        <Route path="/ogoloshennya-dlya-abituriientiv" element={<OgoloshennyaDlyaAbituriientiv />} />
        <Route path="/newspaper-lider" element={<NewspaperLider />} />
        <Route path="/metodyka-porady" element={<MetodykaPorady />} />
        <Route path="/normatyvna-baza" element={<NormatyvnaBaza />} />
        <Route path="/pablic-info" element={<PablicInfo />} />
        <Route path="/psycholog" element={<Psycholog />} />
        <Route path="/psycholog/bullying" element={<Bullying />} />
        <Route path="/psycholog/war" element={<War />} />
        <Route path="/psycholog/trafficking" element={<Trafficking />} />
      </Routes>
    </Router>
  );
}

export default App;
