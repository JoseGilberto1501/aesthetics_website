import React from 'react';
import styles from '../styles/components/AboutDoctor.module.css';

const AboutDoctor: React.FC = () => {
  return (
    <section className={styles.aboutDoctor} id="doctora">
      <div className="container">
        <div className={styles.aboutDoctorContent}>
          <div className={styles.doctorInfo}>
            <h2 className={styles.sectionTitle}>Conoce a la Doctora</h2>
            <h3 className={styles.doctorName}>Dra. Monica Castro Pérez</h3>
            <div className={styles.doctorDescription}>
              <p>
                Especialista en Medicina Estética con más de 10 años de experiencia. 
                La Dra. Monica Castro Pérez se formó en las mejores instituciones nacionales e 
                internacionales, siempre a la vanguardia de las últimas técnicas y 
                tecnologías en estética.
              </p>
              <p>
                Su enfoque combina el arte de la belleza con el rigor científico, 
                brindando a cada paciente tratamientos personalizados y naturales 
                que realzan su belleza única.
              </p>
              <p>
                Miembro activa de la Sociedad Española de Medicina Estética y 
                ponente en congresos internacionales sobre avances en tratamientos faciales.
              </p>
            </div>
            <div className={styles.doctorQualifications}>
              <h4>Certificaciones y Especialidades</h4>
              <ul className={styles.qualificationsList}>
                <li>Medicina Estética - Universidad de Barcelona</li>
                <li>Especialización en Dermatología Estética - Harvard Medical School</li>
                <li>Miembro de la Sociedad Española de Medicina Estética (SEME)</li>
                <li>Certificación en Tecnología Láser Avanzada</li>
              </ul>
            </div>
          </div>
          <div className={styles.doctorImageContainer}>
            <div className={styles.doctorImage}>
              <img 
                src="/images/Dra.jpeg" 
                alt="Dra. Monica Castro Pérez - Especialista en Medicina Estética" 
                className={styles.image}
              />
            </div>
            <div className={styles.imageCaption}>
              <p>Dra. Monica Castro Pérez</p>
              <span>Especialista en Medicina Estética</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;