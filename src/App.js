import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Pages/AboutUs";
import Promotion from "./Pages/Promotion";
import HowToPlay from "./Pages/HowToPlay/HowToPlay";
import Leaderboard from "./Pages/Leaderboard";
import Privacy from "./Pages/Privacy/Privacy";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import RummyRules from "./Pages/RummyRules/RummyRules";
import RummyTips from "./Pages/RummyTips/RummyTips";
import Leagal from "./Pages/Leagal/Leagal";
import Faq from "./Pages/Faq/Faq";
import TC from "./Pages/TermCondition/TC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/rummy-rules" element={<RummyRules />} />
          <Route path="/rummy-tips" element={<RummyTips />} />
          <Route path="/rummy-legal" element={<Leagal />} />
          <Route path="/rummy-faq" element={<Faq />} />
          <Route path="/tc" element={<TC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
