// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Navbar } from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <main className="relative">
      <Navbar />
      <App />
      <Footer />
    </main>
  </BrowserRouter>
);
