import { Eye, Target } from 'lucide-react';
import PageHero from '../components/PageHero';
import { team } from '../data/content';
import heroImage from '../assets/images/classroom-question.jpg';
import storyImage from '../assets/images/lab-coat-experiment.jpg';
import './About.css';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About STEMFIELD Foundation"
        description="We're on a mission to transform STEM education across Ghana, one student at a time."
        image={heroImage}
        imagePosition="center 30%"
      />

      <section className="section">
        <div className="container story-grid">
          <div className="story">
            <h2>Our story</h2>
            <p>
              Founded in 2018, STEMFIELD Foundation began with a simple observation: talented
              students across Ghana were missing opportunities in STEM fields due to limited
              access to quality education and resources.
            </p>
            <p>
              What started as a small after-school program in Accra has grown into a nationwide
              initiative, reaching thousands of students across 23 schools. Our programs combine
              hands-on learning, mentorship, and real-world applications to make STEM education
              engaging and accessible.
            </p>
            <p>
              Today, we're proud to see our alumni pursuing careers in engineering, medicine,
              technology, and research, contributing to Ghana's development and inspiring the
              next generation of learners.
            </p>
          </div>
          <figure className="story__image">
            <img src={storyImage} alt="A student uses a pipette during a STEMFIELD lab session at Kotei Basic School" />
          </figure>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container vision-mission">
          <div className="vm-card">
            <div className="vm-card__icon"><Eye size={22} /></div>
            <h3>Our vision</h3>
            <p>
              A Ghana where every student has access to world-class STEM education, empowering
              them to become innovators, problem solvers, and leaders who drive sustainable
              development and technological advancement across Africa.
            </p>
          </div>
          <div className="vm-card">
            <div className="vm-card__icon"><Target size={22} /></div>
            <h3>Our mission</h3>
            <p>
              To provide accessible, high-quality STEM education programs that inspire
              curiosity, build critical thinking skills, and create pathways for students to
              pursue careers in science, technology, engineering, and mathematics.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Meet our team</h2>
            <p>The people driving STEMFIELD Foundation's mission forward every day</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card__body">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
