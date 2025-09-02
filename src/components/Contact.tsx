import React, { useState } from 'react';
import styles from '../styles/components/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock  
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebookF, 
  faTiktok, 
  faWhatsapp  
} from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contacto">
      <div className="container">
        <h2 className={styles.sectionTitle}>Reserva tu Cita</h2>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoSection}>
              <h3>Horario de Atención</h3>
              <p><FontAwesomeIcon icon={faClock} /> Lunes a Viernes: 9:00 - 20:00</p>
              <p><FontAwesomeIcon icon={faClock} /> Sábados: 10:00 - 18:00</p>
            </div>
            
            <div className={styles.infoSection}>
              <h3>Contacto</h3>
              <p><FontAwesomeIcon icon={faPhone} /> +506 8558 3579</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@glowbymoniestetica.com</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Costa Rica, Alajuela, Palmitos</p>
            </div>
            
            <div className={styles.infoSection}>
              <h3>Síguenos</h3>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a>
                <a href="#" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;