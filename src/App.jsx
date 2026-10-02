import Navbar from "./components/Navbar";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import ThankYou from "./components/ThankYou";
function App() {
  if (window.location.pathname === "/thank-you") {
    return <ThankYou />;
  }

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
      <a href="#booking" className="hero-button">
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

<section className="booking-section" id="booking">
  <div className="booking-container">
    <p className="section-label">GET STARTED</p>

    <h2>Let's Get You Started.</h2>

    <p className="booking-description">
      Tell me a little about the student and what you're looking for.
      I'll reach out so we can talk about lessons and find a good fit.
    </p>

    <BookingForm />
  </div>
</section>
<FAQ/>
<Footer/>
      </main>
    </div>
  );
}
export default App;