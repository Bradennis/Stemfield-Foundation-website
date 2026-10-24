import './PageHero.css';

export default function PageHero({ eyebrow, title, description, image, imagePosition = 'center' }) {
  return (
    <section
      className={`page-hero ${image ? 'page-hero--image' : ''}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundPosition: imagePosition } : undefined}
    >
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
