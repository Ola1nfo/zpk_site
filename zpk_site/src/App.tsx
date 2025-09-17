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
      </Routes>
    </Router>
  );
}

export default App;
