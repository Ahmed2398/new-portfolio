import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import QuickLinksDropdown from "./components/QuickLinksDropdown";
import WelcomeAudio from "./components/WelcomeAudio";
import Chatbot from "./components/Chatbot/Chatbot";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./seo/Seo";
import { pageSeo } from "./seo/pages";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./responsive.css";
import "./rtl.css";
import "./theme-light.css";
import "./theme-light-fixes.css";

// Pages load on demand so the first visit downloads less
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Services = lazy(() => import("./components/Services/Services"));
const Journey = lazy(() => import("./components/Journey/Journey"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <QuickLinksDropdown />
      <WelcomeAudio ready={!load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<><Seo path="/" {...pageSeo["/"]} /><Home /></>} />
          <Route path="/project" element={<><Seo path="/project" {...pageSeo["/project"]} /><Projects /></>} />
          <Route path="/about" element={<><Seo path="/about" {...pageSeo["/about"]} /><About /></>} />
          <Route path="/services" element={<><Seo path="/services" {...pageSeo["/services"]} /><Services /></>} />
          <Route path="/journey" element={<><Seo path="/journey" {...pageSeo["/journey"]} /><Journey /></>} />
          <Route path="/resume" element={<><Seo path="/resume" {...pageSeo["/resume"]} /><Resume /></>} />
          <Route path="/contact" element={<><Seo path="/contact" {...pageSeo["/contact"]} /><Contact /></>} />
          <Route path="*" element={<><Seo path="/" noindex {...pageSeo.notFound} /><NotFound /></>} />
        </Routes>
        </Suspense>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
