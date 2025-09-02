import React from 'react';
import styles from '../styles/components/Services.module.css';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: 'fas fa-spa',
      title: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y rejuvenecimiento facial con tecnología de punta.'
    },
    {
      id: 2,
      icon: 'fas fa-heart',
      title: 'Corporales',
      description: 'Moldeamiento, reducción de medidas y tratamientos reafirmantes para tu cuerpo.'
    },
    {
      id: 3,
      icon: 'fas fa-magic',
      title: 'Depilación Láser',
      description: 'Tecnología avanzada para una depilación precisa y resultados permanentes.'
    }
  ];

  return (
    <section className={styles.services} id="servicios">
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className={service.icon}></i>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;