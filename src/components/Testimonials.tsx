import React from 'react';
import styles from '../styles/components/Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Elena Martínez',
      text: '"Llevo años confiando en sus tratamientos y siempre obtengo resultados increíbles. Profesionales excelentes y un trato excepcional."',
      avatar: 'EM'
    },
    {
      id: 2,
      name: 'Carla Rodríguez',
      text: '"El lugar perfecto para desconectar y cuidarse. Ambiente relajante y resultados visibles desde la primera sesión. Totalmente recomendable."',
      avatar: 'CR'
    },
    {
      id: 3,
      name: 'Sofía López',
      text: '"Recomiendo totalmente sus servicios. Atención personalizada y tratamientos de primera calidad. He probado varios centros y este es sin duda el mejor."',
      avatar: 'SL'
    }
  ];

  return (
    <section className={styles.testimonials} id="testimonios">
      <div className="container">
        <h2 className={styles.sectionTitle}>Opiniones de Clientes</h2>
        <p className={styles.sectionSubtitle}>Descubre lo que nuestros clientes dicen sobre nosotros</p>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>
                  {testimonial.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;