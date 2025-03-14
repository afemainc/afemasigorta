import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  background-color: var(--white);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.form``;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
  margin-right: 1rem;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h4`
  margin-bottom: 0.25rem;
`;

const InfoText = styled.p`
  color: var(--gray);
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: var(--font-family);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  min-height: 150px;
  font-family: var(--font-family);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-family: var(--font-family);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #cc5500;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  
  ${props => props.type === 'success' && `
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  `}
  
  ${props => props.type === 'error' && `
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  `}
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: var(--primary);
  border-radius: 8px;
`;

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    console.log('Initializing EmailJS with:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    });
    
    if (!publicKey) {
      console.error('EmailJS public key is missing!');
      return;
    }
    
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'Lütfen adınızı giriniz.' });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Lütfen geçerli bir e-posta adresi giriniz.' });
      return false;
    }
    if (!formData.phone.trim() || !/^[0-9\s+()-]+$/.test(formData.phone)) {
      setMessage({ type: 'error', text: 'Lütfen geçerli bir telefon numarası giriniz.' });
      return false;
    }
    if (!formData.message.trim()) {
      setMessage({ type: 'error', text: 'Lütfen mesajınızı giriniz.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS credentials:', { serviceId, templateId, publicKey });
      setMessage({
        type: 'error',
        text: 'Sistem yapılandırması eksik. Lütfen daha sonra tekrar deneyiniz.'
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setMessage({
        type: 'success',
        text: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({
        type: 'error',
        text: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyiniz.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact" className="section">
      <div className="container">
        <SectionTitle>İletişim</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoTitle>Adres</InfoTitle>
                <InfoText>Mersin, Türkiye</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoContent>
                <InfoTitle>Telefon</InfoTitle>
                <InfoText>
                  <a href="tel:+905354312698" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +90 535 431 26 98
                  </a>
                </InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoTitle>E-posta</InfoTitle>
                <InfoText>
                  <a href="mailto:afemasigorta@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    afemasigorta@gmail.com
                  </a>
                </InfoText>
              </InfoContent>
            </InfoItem>
            <MapContainer>
              <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.9232373846644!2d34.31375008746294!3d36.60551376524431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x23e229e9ab061c13%3A0x157219a22bc28b1!2sAFEMA%20S%C4%B0GORTA%20S%C4%B0GORTAMTR!5e0!3m2!1sen!2str!4v1741548372038!5m2!1sen!2str" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </ContactInfo>
          <ContactForm ref={formRef} onSubmit={handleSubmit} style={{ position: 'relative' }}>
            {message.text && (
              <FormMessage type={message.type}>{message.text}</FormMessage>
            )}
            <FormGroup>
              <FormLabel htmlFor="name">Adınız Soyadınız</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">E-posta Adresiniz</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="phone">Telefon Numaranız</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="user_phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Mesajınız</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Gönderiliyor...' : 'Gönder'}
            </SubmitButton>
            {isLoading && <LoadingOverlay>Mesajınız gönderiliyor...</LoadingOverlay>}
          </ContactForm>
        </ContactGrid>
      </div>
    </ContactSection>
  );
};

export default Contact;
