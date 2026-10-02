function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="section-label">GET STARTED</p>

        <h2>
          Ready to start
          <br />
          playing?
        </h2>

        <p className="contact-description">
          Take the first step toward learning piano. Fill out the form and
          let's find a lesson time that works for you.
        </p>

        <a
          href="#booking"

          className="contact-button"
        >
          Book a Lesson
        </a>

        <p className="contact-note">
          No experience necessary. Beginners are welcome.
        </p>
      </div>
    </section>
  );
}

export default Contact;