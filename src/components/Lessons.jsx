
function Lessons() {
  return (
    <section className="lessons" id="lessons">
      <div className="lessons-container">
        <div className="lessons-heading">
          <p className="section-label">LESSONS</p>

          <h2>
            Piano lessons
            <br />
            made simple.
          </h2>

          <p className="lessons-intro">
            Whether you're just starting out or looking to build a stronger
            foundation, lessons are designed to make learning piano
            approachable, practical, and enjoyable.
          </p>
        </div>

        <div className="lesson-cards">
          <div className="lesson-card">
            <div className="lesson-number">01</div>

            <h3>Beginner Piano</h3>

            <p>
              Learn the fundamentals of piano, including notes, chords,
              rhythm, scales, and proper technique.
            </p>
          </div>

          <div className="lesson-card">
            <div className="lesson-number">02</div>

            <h3>Kids & Students</h3>

            <p>
              Fun and encouraging lessons that help younger students develop
              confidence while building a strong musical foundation.
            </p>
          </div>

          <div className="lesson-card">
            <div className="lesson-number">03</div>

            <h3>Learn Your Favorite Songs</h3>

            <p>
              Apply what you're learning to real music and start playing songs
              you actually enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lessons;