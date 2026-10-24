import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, TrendingUp, HeartHandshake, Expand } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { stats, gallery } from '../data/content';
import heroImage from '../assets/images/lab-demo-group.jpg';
import missionImage from '../assets/images/team-with-students.jpg';
import './Home.css';

const iconMap = { Users, GraduationCap, TrendingUp, HeartHandshake };

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <h1>Building Ghana's future through STEM education</h1>
          <p>
            We empower students with the skills, knowledge, and confidence to become the next
            generation of innovators and problem solvers.
          </p>
          <div className="hero__actions">
            <Link to="/get-involved" className="btn btn-primary">
              Donate now <ArrowRight size={16} />
            </Link>
            <Link to="/get-involved" className="btn btn-ghost-dark">
              Volunteer with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container">
          <div className="section-head">
            <h2>Our impact in numbers</h2>
            <p>Real results from our commitment to transforming STEM education across Ghana</p>
          </div>
          <div className="stats__grid">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-card__icon">
                    <Icon size={22} />
                  </div>
                  <div className="stat-card__value">{stat.value}</div>
                  <div className="stat-card__label">{stat.label}</div>
                  <p className="stat-card__detail">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section mission-teaser">
        <div className="container mission-teaser__grid">
          <div>
            <h2>Our mission</h2>
            <p>
              STEMFIELD Foundation is dedicated to bridging the gap in STEM education across
              Ghana. We believe every student deserves access to quality science, technology,
              engineering, and mathematics education, regardless of their background.
            </p>
            <p>
              Through hands-on programs, mentorship, and community partnerships, we're creating
              pathways for students to discover their potential and pursue careers that will
              shape Ghana's future.
            </p>
            <Link to="/about" className="btn btn-primary mission-teaser__cta">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mission-teaser__image">
            <img
              src={missionImage}
              alt="A STEMFIELD facilitator with smiling students at Deduako MA JHS"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint gallery">
        <div className="container">
          <div className="section-head">
            <h2>From the field</h2>
            <p>Hands-on science sessions with students at Kotei Basic School and Deduako MA JHS</p>
          </div>
          <div className="gallery__grid">
            {gallery.map((item, index) => (
              <figure className="gallery__item" key={item.caption}>
                <button
                  type="button"
                  className="gallery__open"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`View photo: ${item.caption}`}
                >
                  <img src={item.image} alt={`${item.caption} at ${item.school}`} loading="lazy" style={item.position ? { objectPosition: item.position } : undefined} />
                  <span className="gallery__zoom" aria-hidden="true"><Expand size={16} /></span>
                  <span className="gallery__caption">
                    <strong>{item.caption}</strong>
                    <span>{item.school}</span>
                  </span>
                </button>
              </figure>
            ))}
          </div>
          {openIndex !== null && (
            <Lightbox
              items={gallery}
              index={openIndex}
              onClose={() => setOpenIndex(null)}
              onChange={setOpenIndex}
            />
          )}
          <div className="gallery__cta">
            <Link to="/programs" className="btn btn-primary">
              See our programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Join us in making a difference</h2>
          <p>
            Whether through volunteering, donations, or partnerships, your support helps us
            reach more students and create lasting change in STEM education.
          </p>
          <div className="cta-band__actions">
            <Link to="/get-involved" className="btn btn-white">
              Get involved today <ArrowRight size={16} />
            </Link>
            <Link to="/programs" className="btn btn-ghost-dark">
              Explore our programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
