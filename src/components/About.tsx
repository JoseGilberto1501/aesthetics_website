import React from 'react';
import styles from '../styles/components/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="nosotros">
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img 
              src="/images/Couple.jpeg" 
              alt="Instalaciones de GLOW BY MONI Estética" 
              className={styles.image}
            />
          </div>
          <div className={styles.aboutInfo}>
            <h2 className={styles.sectionTitle}>Nuestra Filosofía</h2>
            <div className={styles.aboutText}>
              <p>
                En GLOW BY MONI Estética creemos en realzar la belleza natural a través de 
                tratamientos personalizados que cuidan de tu piel y bienestar. 
                Nuestro equipo de expertos combina lo último en tecnología con 
                técnicas tradicionales para ofrecerte resultados excepcionales.
              </p>
              <p>
                Ambiente tranquilo, profesionalismo y atención al detalle son 
                nuestros pilares para brindarte una experiencia única que va más 
                allá de lo estético, buscando tu bienestar integral.
              </p>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Enfoque Personalizado</h4>
                <p>Cada tratamiento se adapta a tus necesidades específicas</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-flask"></i>
                </div>
                <h4>Tecnología Avanzada</h4>
                <p>Equipos de última generación para mejores resultados</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Atención Premium</h4>
                <p>Servicio exclusivo y cuidado minucioso en cada detalle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;