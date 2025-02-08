import "../src/index.css"
import Landing from "./Pages/Landing";
import FeaturesSection from "./Pages/Features_Section";
import Dashboard from "./Pages/DashBoard";
import Ai_Predictor from "./Pages/Ai_Predictor";
import Voting from "./Pages/Voting";
import GreenHeroes from "./Pages/GreenHeroes";
import Issues from "./Pages/Issues";
import Navbar from "./Pages/Navbar";
import ChatBot from "./Pages/ChatBot";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<><Landing /><FeaturesSection /></>} />
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
