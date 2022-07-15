import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assessments from "./pages/Assessment";
import FillProfile from "./pages/FillProfile";
import A from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import side from "./Side"
function App() {
  return (
    <Router>
      <A />
      {/* <side /> */}
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fill_profile" element={<FillProfile />} />
          <Route path="/assessments" element={[...Array(4)].map((x, i) =><Assessments />)} />
          <Route path="*" element={<> Page Not Found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
