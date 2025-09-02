import React, { useState } from 'react';
import styles from '../styles/components/Header.module.css';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <a href="#" className={styles.logo}>GLOW BY MONI</a>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#doctora">La Doctora</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><LanguageSelector /></li>
            </ul>
            <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;