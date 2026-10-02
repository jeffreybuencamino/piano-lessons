
function BookingForm() {

  const handleSubmit = (e) => {
  e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
        studentType: formData.get("studentType"),
        studentName: formData.get("studentName"),
        age: formData.get("age"),
        experience: formData.get("experience"),
        goals: formData.getAll("goals").join(", "),
        schedule: formData.get("schedule"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

  fetch(
    "https://script.google.com/macros/s/AKfycbx5TeSABkIrqDrC0qPxSO1_Fd-3UxzilhlrVjT3MqeXfmDBUz5mGJDjoCO6_lvSSpHzUw/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    }
  )
    .then(() => {
      form.reset();
      window.location.href = "/thank-you";
    })
    .catch((error) => {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    });
};

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>👋 Who are we getting started with?</label>
        <div className="radio-options">
          <label>
            <input type="radio" name="studentType" value="My child" required />
            My child
          </label>

          <label>
            <input type="radio" name="studentType" value="Myself" />
            Myself
          </label>

          <label>
            <input type="radio" name="studentType" value="Someone else" />
            Someone else
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="studentName">✨ What's the student's name?</label>
        <input
          id="studentName"
          type="text"
          name="studentName"
          placeholder="Student's name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">🎈 What age is the student?</label>
        <input
          id="age"
          type="number"
          name="age"
          placeholder="Age"
          min="1"
          max="100"
          required
        />
      </div>

      <div className="form-group">
        <label>🎹 Where is the student at in their piano journey?</label>

        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="experience"
              value="Complete beginner - never played before"
              required
            />
            Complete beginner — never played before
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="Beginner - played a little"
            />
            Beginner — I've played a little
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="Some experience"
            />
            Some experience
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="Not sure"
            />
            Not sure
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>🎶 What are your goals?</label>

        <div className="checkbox-options">
          <label>
            <input type="checkbox" name="goals" value="Learn the basics" />
            Learn the basics
          </label>

          <label>
            <input type="checkbox" name="goals" value="Learn songs I enjoy" />
            Learn songs I enjoy
          </label>

          <label>
            <input type="checkbox" name="goals" value="Play for fun" />
            Play for fun
          </label>

          <label>
            <input type="checkbox" name="goals" value="Improve my skills" />
            Improve my skills
          </label>

          <label>
            <input type="checkbox" name="goals" value="Learn music theory" />
            Learn music theory
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>📅 What kind of lesson schedule sounds best for you?</label>

        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="schedule"
              value="Once a week"
              required
            />
            Once a week
          </label>

          <label>
            <input
              type="radio"
              name="schedule"
              value="Twice a week"
            />
            Twice a week
          </label>

          <label>
            <input
              type="radio"
              name="schedule"
              value="Every other week"
            />
            Every other week
          </label>

          <label>
            <input
              type="radio"
              name="schedule"
              value="Not sure yet"
            />
            I'm not sure yet
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">📞 What's the best number to reach you?</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          ✉️ What's the best email to reach you?
          <span className="optional">OPTIONAL</span>
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">
          💬 Anything else you'd like me to know?
          <span className="optional">OPTIONAL</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me anything you'd like to share..."
        ></textarea>
      </div>

      <button type="submit" className="booking-submit">
        🎹 Request a Call
      </button>
    </form>
  );
}

export default BookingForm;