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
          href="https://docs.google.com/forms/d/e/1FAIpQLSc6g0j79u7HirAxq5sk7wQDV8VH0gAeHN_0LDDu0hNtm1V06g/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
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