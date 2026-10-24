import { useState } from 'react';
import { HandHeart, Building2, Megaphone, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import { involvedOptions, pricingTiers } from '../data/content';
import heroImage from '../assets/images/team-with-students.jpg';
import volunteerImage from '../assets/images/pipette-closeup.jpg';
import './GetInvolved.css';

const iconMap = { HandHeart, Building2, Megaphone };

const initialForm = {
  name: '',
  email: '',
  phone: '',
  experience: '',
  availability: '',
};

export default function GetInvolved() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Get involved"
        description="Join us in creating opportunities for students across Ghana. Your time and support make a real difference."
        image={heroImage}
        imagePosition="center 40%"
      />

      <section className="section">
        <div className="container involved-options">
          {involvedOptions.map((option) => {
            const Icon = iconMap[option.icon];
            return (
              <div className="involved-card" key={option.title}>
                <div className="involved-card__icon"><Icon size={22} /></div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <h2>Support with a donation</h2>
            <p>Your donation directly funds programs, equipment, and opportunities for students across Ghana</p>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <div className={`pricing-card ${tier.popular ? 'pricing-card--popular' : ''}`} key={tier.name}>
                {tier.popular && <span className="pricing-card__badge">Most popular</span>}
                <h3>{tier.name}</h3>
                <div className="pricing-card__price">
                  <span className="amount">${tier.price}</span>
                  <span className="period">/month</span>
                </div>
                <ul>
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}><Check size={16} /> {benefit}</li>
                  ))}
                </ul>
                <button className={`btn btn-block ${tier.popular ? 'btn-white' : 'btn-primary'}`}>
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container volunteer-layout">
          <figure className="volunteer-image">
            <img src={volunteerImage} alt="A student carries out an experiment at a STEMFIELD session" loading="lazy" />
          </figure>
          <div className="volunteer-form">
            <div className="section-head" style={{ marginBottom: 40 }}>
              <h2>Volunteer with us</h2>
              <p>Tell us a bit about yourself and we'll be in touch about opportunities that fit.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Full name *
                  <input type="text" placeholder="Kwame Asante" required value={form.name} onChange={handleChange('name')} />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email address *
                  <input type="email" placeholder="kwame@example.com" required value={form.email} onChange={handleChange('email')} />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone number *
                  <input type="tel" placeholder="+233 24 123 4567" required value={form.phone} onChange={handleChange('phone')} />
                </label>
              </div>
              <div className="form-row form-row--split">
                <label>
                  Experience level
                  <select value={form.experience} onChange={handleChange('experience')}>
                    <option value="">Select your experience level</option>
                    <option value="none">No prior experience</option>
                    <option value="some">Some experience</option>
                    <option value="experienced">Experienced educator</option>
                  </select>
                </label>
                <label>
                  Availability
                  <select value={form.availability} onChange={handleChange('availability')}>
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit application</button>
              {submitted && <p className="form-success">Thanks — we've received your application and will be in touch soon.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
