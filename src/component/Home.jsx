import { Link } from 'react-router-dom';
import modelImg from '../images/mo.png';   

function Home() {
  return (
    <>
    <div className="hero">
      <div className="content">
        <p className="tagline">NEW SEASON. NEW YOU</p>
        <h1>
          Fashion That<br />Fits Your Life
        </h1>
        <p className="subtitle">
          Discover premium fashion, modern styles and <br />
          must-have essentials <br />
          designed for your everyday moments.
        </p><br />
        <Link to="/shop" className="btn">Shop Now</Link>
      </div>
      <img src={modelImg} alt="model" />
    </div>
    <footer className="footer">
        <section class="features">

    <div class="feature">
        <div class="feature-icon">🚚</div>

        <div>
            <h3>Free Shipping</h3>
            <p>On Order $50+</p>
        </div>
    </div>


    <div class="feature">
        <div class="feature-icon">↻</div>

        <div>
            <h3>Easy Returns</h3>
            <p>Within 30 Days</p>
        </div>
    </div>


    <div class="feature">
        <div class="feature-icon">🔒</div>

        <div>
            <h3>Secure Payments</h3>
            <p>100% Secure</p>
        </div>
    </div>


    <div class="feature">
        <div class="feature-icon">🎧</div>

        <div>
            <h3>24/7 Support</h3>
            <p>We're Here to Help</p>
        </div>
    </div>

</section>
      </footer>
    </>
  );
}

export default Home;