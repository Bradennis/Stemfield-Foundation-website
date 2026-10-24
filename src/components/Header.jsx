import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Header.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/programs', label: 'Programs' },
  { to: '/get-involved', label: 'Get involved' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="STEMFIELD Foundation" className="brand__logo" />
        </NavLink>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/get-involved" className="btn btn-primary site-nav__cta" onClick={() => setOpen(false)}>
            Donate now
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
