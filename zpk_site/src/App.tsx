import { BrowserRouter as Router, Routes, Route } from "react-router";
// import { Provider } from "react-redux";
// import store from './store';
import './App.css';
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Home /></>}/>
      </Routes>
    </Router>
  );
}

export default App;
