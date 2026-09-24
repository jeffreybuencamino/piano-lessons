import { useState } from "react";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <p className="section-label">FAQ</p>

          <h2>
            Questions?
            <br />
            I've got answers.
          </h2>
        </div>

        <div className="faq-list">
          <div className="faq-item">
            <button onClick={() => toggleQuestion(0)}>
              <h3>Do I need any piano experience?</h3>
              <span>{openQuestion === 0 ? "−" : "+"}</span>
            </button>

            {openQuestion === 0 && (
              <p>
                Not at all. Beginners are welcome, and lessons can start from
                the very basics.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button onClick={() => toggleQuestion(1)}>
              <h3>What age groups do you teach?</h3>
              <span>{openQuestion === 1 ? "−" : "+"}</span>
            </button>

            {openQuestion === 1 && (
              <p>
                Lessons are available for beginners of different ages,
                including kids, teens, and adults.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button onClick={() => toggleQuestion(2)}>
              <h3>What will I learn during lessons?</h3>
              <span>{openQuestion === 2 ? "−" : "+"}</span>
            </button>

            {openQuestion === 2 && (
              <p>
                Lessons can cover notes, chords, scales, rhythm, technique,
                music theory, and learning songs.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button onClick={() => toggleQuestion(3)}>
              <h3>Can I learn songs I actually like?</h3>
              <span>{openQuestion === 3 ? "−" : "+"}</span>
            </button>

            {openQuestion === 3 && (
              <p>
                Absolutely. Learning music you enjoy can be a great way to
                stay motivated while developing your piano skills.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button onClick={() => toggleQuestion(4)}>
              <h3>How do I get started?</h3>
              <span>{openQuestion === 4 ? "−" : "+"}</span>
            </button>

            {openQuestion === 4 && (
              <p>
                Click the Book a Lesson button and fill out the form to get
                started.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;