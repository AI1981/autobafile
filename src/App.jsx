import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";

function App() {

  return (
  <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
  </div>
  )
}

export default App;
