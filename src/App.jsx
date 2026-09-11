import Starfield from "./components/Starfield";
import "./components/Starfield.css";
import ScrollProgress from "./components/ScrollProgress";
import "./components/ScrollProgress.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Materials from "./sections/Materials";
import Tutoring from "./sections/Tutoring";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";

export default function App() {
  return (
    <>
      <div className="nebula-backdrop" aria-hidden="true" />
      <Starfield />
      <ScrollProgress />

      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Materials />
        <Tutoring />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
