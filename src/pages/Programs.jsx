import PageHero from '../components/PageHero';
import { programs } from '../data/content';
import heroImage from '../assets/images/students-pipette.jpg';
import './Programs.css';

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Our programs"
        description="Hands-on STEM programs designed to meet students where they are and take their skills further."
        image={heroImage}
        imagePosition="center 40%"
      />

      <section className="section">
        <div className="container programs-list">
          {programs.map((program, index) => (
            <article className={`program ${index % 2 === 1 ? 'program--reverse' : ''}`} key={program.title}>
              <div className="program__image">
                <img src={program.image} alt={program.title} loading="lazy" />
              </div>
              <div className="program__body">
                <span className="eyebrow">{program.badge}</span>
                <h2>{program.title}</h2>
                <p>{program.description}</p>
                <div className="program__impact">
                  <strong>Impact:</strong> {program.impact}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
