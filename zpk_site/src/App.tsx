import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css';
import Home from "./pages/Home/Home"
import History from './pages/AboutUs/History/History'
import Symbols from "./pages/AboutUs/Symbols/Symbols"
import AdmissionRules from "./pages/Abituriyentu/AdmissionRules/AdmissionRules"
import OurProfessions from "./pages/Abituriyentu/OurProfessions/OurProfessions";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/symbols' element={<Symbols />}/>
        <Route path='/admission-rules' element={<AdmissionRules />}/>
        <Route path='/our-professions' element={<OurProfessions />}/>
      </Routes>
    </Router>
  );
}

export default App;
