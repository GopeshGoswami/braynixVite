// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Navbar } from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Careers from "./pages/Careers.tsx";
import About from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <main className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <App /> */}
      <Footer />
    </main>
  </Router>
);
