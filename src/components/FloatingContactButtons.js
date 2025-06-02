import React from 'react';
import styles from './FloatingContactButtons.module.css';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons = () => {
  // Replace with actual phone number and WhatsApp number
  const phoneNumber = '+905354312698'; // Example phone number
  const whatsappNumber = '+905354312698'; // Example WhatsApp number (without +, use international format)

  return (
    <div className={styles.container}>
      <a href={`tel:${phoneNumber}`} className={styles.button} aria-label="Hemen Arayın">
        <FaPhone />
      </a>
      <a href={`https://wa.me/${whatsappNumber}`} className={styles.button} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp'tan ulaşın">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
