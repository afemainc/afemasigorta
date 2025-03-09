import React from 'react';
import styled from 'styled-components';

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
    background-color: #005bbf;
  }
`;

const Contact = () => {
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
                <InfoText>İstanbul, Türkiye</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoContent>
                <InfoTitle>Telefon</InfoTitle>
                <InfoText>+90 555 123 4567</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoTitle>E-posta</InfoTitle>
                <InfoText>info@afemasigorta.com</InfoText>
              </InfoContent>
            </InfoItem>
            <MapContainer>
              <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.944680773634!2d28.9783738!3d41.034957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltLCBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1659887777777!5m2!1str!2str" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </ContactInfo>
          <ContactForm>
            <FormGroup>
              <FormLabel htmlFor="name">Adınız Soyadınız</FormLabel>
              <FormInput type="text" id="name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">E-posta Adresiniz</FormLabel>
              <FormInput type="email" id="email" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="phone">Telefon Numaranız</FormLabel>
              <FormInput type="tel" id="phone" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Mesajınız</FormLabel>
              <FormTextarea id="message" />
            </FormGroup>
            <SubmitButton type="submit">Gönder</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </div>
    </ContactSection>
  );
};

export default Contact;
