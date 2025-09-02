import React, { useState } from 'react';
import styles from '../styles/components/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebookF, 
  faTiktok,
  faWhatsapp,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email suscrito:', email);
      alert('¡Gracias por suscribirte! Te enviaremos nuestras novedades.');
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <h3 className={styles.logo}>GLOW BY MONI</h3>
              <p className={styles.logoDescription}>
                Tu centro de belleza y bienestar en Madrid. Tratamientos premium 
                con resultados visibles y atención personalizada.
              </p>
              <div className={styles.paymentMethods}>
                <h4>Métodos de pago</h4>
                <div className={styles.paymentIcons}>                   
                  <FontAwesomeIcon icon={faCcVisa} />
                  <FontAwesomeIcon icon={faCcMastercard} />
                  <FontAwesomeIcon icon={faCcAmex} />
                  <FontAwesomeIcon icon={faCcPaypal} />
                  
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Enlaces Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#doctora">La Doctora</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Nuestros Servicios</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Tratamientos Faciales</a></li>
              <li><a href="#">Tratamientos Corporales</a></li>
              <li><a href="#">Depilación Láser</a></li>
              <li><a href="#">Mesoterapia</a></li>
              <li><a href="#">Botox</a></li>
              <li><a href="#">Ácido Hialurónico</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactInfo}>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />                
                Costa Rica, Alajuela, Palmitos
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />  
                +506 8558 3579
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />  
                info@glowbymoniestetica.com
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} />  
                Lun-Vie: 9:00 - 20:00<br />
                Sáb: 10:00 - 18:00
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Suscríbete para recibir promociones exclusivas y consejos de belleza.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterBtn}>
                <FontAwesomeIcon icon={faPaperPlane} />  
              </button>
            </form>
            <div className={styles.socialMedia}>
              <h4>Síguenos</h4>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="TikTok" className={styles.socialIcon}>
                  <FontAwesomeIcon icon={faTiktok} />
                </a>                
                <a href="#" aria-label="Whatsapp" className={styles.socialIcon}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} GLOW BY MONI Estética. Todos los derechos reservados.</p>
            </div>
            <div className={styles.legalLinks}>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos y Condiciones</a>
              <a href="#">Política de Cookies</a>
              <a href="#">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;