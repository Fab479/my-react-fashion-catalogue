
import { Link } from 'react-router-dom';
function About() {
  return (
    <main>
    <div className="about">
      <h1>About Us</h1>
      <p>Welcome to our fashion store! We are dedicated to providing high-quality clothing and accessories for all seasons.</p>
      <Link to="/contact" className="btn">Contact Us</Link>
    </div>
        <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Antixor</h2>

          <p>
            Your one-stop destination for stylish fashion and quality
            accessories.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>


        {/* Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>

          <Link to="/help">Help & Support</Link>
          <Link to="/returns">Returns & Refund</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/track-order">Track Order</Link>
          <Link to="/support">Support</Link>
        </div>


        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>

          <p>
            Get the latest updates and exclusive offers.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
            />

            <button type="submit">
              Subscribe →
            </button>
          </form>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2025 Antixor. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>

    </footer>
    </main>
  );
}

export default About;