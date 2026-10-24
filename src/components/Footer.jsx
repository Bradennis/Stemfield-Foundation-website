import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import SocialIcon from './SocialIcon';
import logo from '../assets/images/logo.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link to="/" className="brand footer-brand__logo">
            <img src={logo} alt="STEMFIELD Foundation" className="brand__logo" />
          </Link>
          <p className="footer-tagline">
            Empowering the next generation of innovators through quality STEM education in Ghana.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/get-involved">Get involved</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact us</h4>
          <ul className="footer-contact">
            <li><MapPin size={16} /> Accra, Ghana</li>
            <li><Mail size={16} /> info@stemfield.org</li>
            <li><Phone size={16} /> +233 24 567 8901</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Stay connected</h4>
          <p className="footer-newsletter-copy">Subscribe to our newsletter for updates</p>
          <form className="footer-subscribe" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          {subscribed && <p className="footer-subscribe__success">Thanks — you're on the list.</p>}

          <div className="footer-social">
            <a href="#" aria-label="Facebook"><SocialIcon name="facebook" size={16} /></a>
            <a href="#" aria-label="Twitter"><SocialIcon name="twitter" size={16} /></a>
            <a href="#" aria-label="Instagram"><SocialIcon name="instagram" size={16} /></a>
            <a href="#" aria-label="LinkedIn"><SocialIcon name="linkedin" size={16} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <span>© {new Date().getFullYear()} STEMFIELD Foundation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
