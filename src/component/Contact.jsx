import {Link} from 'react-router-dom';

export default function Contact() {
  return (
    <main>
    <div className="about">
      <h1>Contact Page</h1>
    </div>
    <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
            />
            <input 
            type="text"
            placeholder="type your message"
            />
            <button type="submit">
              Message →
            </button>
          </form>
          <div className="footer-column">
          <h3>Customer Service</h3>

          <div className="icon">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>
        </div>
    </main>
  );
}