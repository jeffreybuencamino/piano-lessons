function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Hi, I'm Jeffrey.
          </h2>

          <p className="about-text">
            I'm a piano teacher who enjoys helping beginners build confidence
            and develop a genuine understanding of music.
          </p>

          <p className="about-text">
            My goal is to make learning piano approachable, encouraging, and
            enjoyable while helping students develop skills they can continue
            using for years to come.
          </p>
        </div>
        <div className="about-images">
          <div className="about-image">
            <img src="/jeffrey.jpeg" alt="Jeffrey, piano teacher" />
          </div>

          <div className="about-image">
            <img src="/msrita.jpeg" alt="Piano lesson" />
          </div>
</div>
      </div>
    </section>
  );
}

export default About;
