import { Footer } from "./layout/Footer";
import { Topnav } from "./components/Topnav";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Heronew } from "./sections/Heronew";
import { Services } from "./sections/Services";
import { useEffect, useState } from "react";


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Topnav scrolled={scrolled} />
      <Navbar />
      <main>
        <Heronew />
        <Features />
        <About />
        <Services />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
