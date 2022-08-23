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
import ProtectedPage from "./Pages/ProtectedPage/ProtectedPage";
import AccountOverView from "./components/AccountOverView/AccountOverView";
import AddCash from "./components/AddCash/AddCash";
import WithdrawCash from "./components/WithdrawCash/WithdrawCash";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Transactions from "./components/Transactions/Transactions";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import OTP from "./Pages/OTP/OTP";

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
          <Route path="/otp" element={<OTP />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/rummy-rules" element={<RummyRules />} />
          <Route path="/rummy-tips" element={<RummyTips />} />
          <Route path="/rummy-legal" element={<Leagal />} />
          <Route path="/rummy-faq" element={<Faq />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="protect"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          >
            <Route path="account-overview" element={<AccountOverView />} />
            <Route path="add-cash" element={<AddCash />} />
            <Route path="withdraw-cash" element={<WithdrawCash />} />
            <Route path="personal-detail" element={<PersonalDetails />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
