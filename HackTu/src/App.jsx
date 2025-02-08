import "./App.css";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/DashBoard";
import Ai_Predictor from "./Pages/Ai_Predictor";
import Voting from "./Pages/Voting";
import GreenHeroes from "./Pages/GreenHeroes";
import Issues from "./Pages/Issues";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/ai_predictor" element={<Ai_Predictor/>} />
        <Route path="/voting" element={<Voting/>} />
        <Route path="/greenheroes" element={<GreenHeroes/>} />
        <Route path="/issues" element={<Issues/>} />
      </Routes>
    </Router>
  );
}

export default App;
