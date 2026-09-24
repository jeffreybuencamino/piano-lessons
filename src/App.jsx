import Navbar from "./components/Navbar";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <section className="hero" id="home">
  <div className="hero-content">
    <p className="eyebrow">PIANO LESSONS</p>

    <h1>
      Learn Piano.
      <br />
      Play Music.
    </h1>

    <p className="hero-description">
      Beginner piano lessons designed to help you build confidence,
      understand the fundamentals, and play songs you actually enjoy.
    </p>

    <div className="hero-actions">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6g0j79u7HirAxq5sk7wQDV8VH0gAeHN_0LDDu0hNtm1V06g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="hero-button">
        Book a Lesson
      </a>

      <a href="#lessons" className="hero-secondary-button">
        Explore Lessons
      </a>
    </div>
  </div>

  <div className="hero-piano">
    <div className="piano-body">
      <div className="piano-keys">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</section>
<Lessons/>
<About/>
<Contact />
<FAQ/>
<Footer/>
      </main>
    </div>
  );
}

export default App;