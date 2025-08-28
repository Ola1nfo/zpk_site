import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css';
import Home from "./pages/Home/Home"
import History from './pages/History/History'
import Symbols from "./pages/Symbols/Symbols";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/symbols' element={<Symbols />}/>
      </Routes>
    </Router>
  );
}

export default App;
