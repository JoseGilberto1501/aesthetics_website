import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="inicio">  
      <div className={styles.heroBackground}>
        <Image
          src="/images/wallpaper2.jpeg" 
          alt="Fondo de hero section - Tratamientos de estética"
          fill
          priority
          quality={90}
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />        
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Belleza natural,<br />resultados excepcionales</h1>
          <p>Descubre tu mejor versión con nuestros tratamientos premium de estética y bienestar.</p>
          <a href="#contacto" className="btn">Reserva tu cita</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;