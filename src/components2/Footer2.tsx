import "./Footer2.css";
import { Button2 } from "./Button2";
import { Link } from "react-router-dom";

export const Footer2 = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join The Adventure</p>
        <p className="footer-subscription-text">Unsubcribe at any time</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Type Email"
            />
            <Button2 buttonStyle="btn--outline">Subscribe</Button2>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to={"/sign-up"}>How it works</Link>
            <Link to={"/"}>Testimony</Link>
            <Link to={"/"}>Careers</Link>
            <Link to={"/"}>Investor</Link>
            <Link to={"/"}>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to={"/"}>PIC</Link>
            <Link to={"/"}>Support</Link>
            <Link to={"/"}>Destinations</Link>
            <Link to={"/"}>Sponsorships</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to={"/"}>Instagram</Link>
            <Link to={"/"}>Facebook</Link>
            <Link to={"/"}>Youtube</Link>
            <Link to={"/"}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to={"/"} className="social-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL @ 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={"/"}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to={"/"}
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={"/"}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to={"/"}
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
