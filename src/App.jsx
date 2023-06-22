import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

import AboutUsPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Banner/>
        <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About Us" element={<AboutUsPage />} />
          <Route path="Blog" element={<BlogPage />} />
          <Route path="Services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
