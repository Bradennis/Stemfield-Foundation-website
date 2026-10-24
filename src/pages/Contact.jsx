import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import heroImage from '../assets/images/lab-glassware.jpg';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Whether you're interested in volunteering, partnering with us, or learning more about our programs, we're here to help."
        image={heroImage}
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Full name *
                <input type="text" placeholder="Your name" required value={form.name} onChange={handleChange('name')} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email address *
                <input type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange('email')} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Message *
                <textarea rows={5} placeholder="How can we help?" required value={form.message} onChange={handleChange('message')} />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send message</button>
            {sent && <p className="form-success">Thanks for reaching out — we'll reply within 2 business days.</p>}
          </form>

          <div className="contact-info">
            <h3>Office location</h3>
            <div className="contact-info__row">
              <MapPin size={18} />
              <div>
                <strong>123 Independence Avenue</strong>
                <span>Accra, Ghana</span>
              </div>
            </div>

            <div className="contact-info__row">
              <Phone size={18} />
              <div>
                <strong>+233 24 567 8901</strong>
                <span>Monday – Friday, 9am – 5pm GMT</span>
              </div>
            </div>

            <div className="contact-info__row">
              <Clock size={18} />
              <div>
                <strong>Office hours</strong>
                <span>Monday – Friday: 9:00 AM – 5:00 PM</span>
                <span>Saturday: 10:00 AM – 2:00 PM</span>
                <span>Sunday: Closed</span>
              </div>
            </div>

            <div className="visit-note">
              <h4>Visit our office</h4>
              <p>
                We welcome visitors to learn more about our programs. Please schedule an
                appointment in advance to ensure someone is available to meet with you.
              </p>
              <p>
                <strong>Directions:</strong> Our office is located near Independence Square,
                easily accessible by public transport.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
