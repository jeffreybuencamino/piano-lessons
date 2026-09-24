import { useState } from "react";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-piano">♬</span>
        PIANO WITH JEFFREY!
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#lessons">Lessons</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6g0j79u7HirAxq5sk7wQDV8VH0gAeHN_0LDDu0hNtm1V06g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="nav-button">
        Book a Lesson
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#lessons" onClick={() => setMenuOpen(false)}>Lessons</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;