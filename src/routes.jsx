import "../globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/navigation/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Merchandise from "./pages/merchandise/merchandise";
import Team from "./pages/team/team.jsx"
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import Registration2 from "./pages/register/Registration2.jsx"
import SUC from "./pages/underConstruction.jsx";
import Footer from "./components/navigation/footer/footer";

function RoutesConfig() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:sport" element={<Registration2 />} />
          <Route path="*" element={<SUC />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default RoutesConfig;
