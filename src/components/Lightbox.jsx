import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const item = items[index];

  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [index, items.length, onChange, onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <button ref={closeRef} className="lightbox__btn lightbox__close" aria-label="Close" onClick={onClose}>
        <X size={22} />
      </button>

      <button
        className="lightbox__btn lightbox__nav lightbox__nav--prev"
        aria-label="Previous photo"
        onClick={(e) => { e.stopPropagation(); prev(); }}
      >
        <ChevronLeft size={26} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={`${item.caption} at ${item.school}`} />
        <figcaption>
          <div>
            <strong>{item.caption}</strong>
            <span>{item.school}</span>
          </div>
          <span className="lightbox__count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>

      <button
        className="lightbox__btn lightbox__nav lightbox__nav--next"
        aria-label="Next photo"
        onClick={(e) => { e.stopPropagation(); next(); }}
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
}
