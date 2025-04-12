import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--secondary);
  color: var(--white);
  padding: 3rem 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: var(--gray);
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: var(--gray);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--white);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  font-size: 1.25rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
  }
`;

const Copyright = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: var(--gray);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>AFEMA Sigorta</FooterLogo>
            <FooterText>
              2008 yılından bu yana müşterilerimize profesyonel ve anlık sigorta çözümleri sunuyoruz.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="https://www.facebook.com/people/AFEMA-Sigorta/61574483662880/?locale=tr_TR" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></SocialIcon>
              <SocialIcon href="https://www.instagram.com/afemasigorta/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Hizmetlerimiz</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#services">Araç Sigortası</a></FooterLink>
              <FooterLink><a href="#services">Sağlık Sigortası</a></FooterLink>
              <FooterLink><a href="#services">Konut Sigortası</a></FooterLink>
              <FooterLink><a href="#services">İşyeri Sigortası</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Şirketimiz</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#about">Hakkımızda</a></FooterLink>
              <FooterLink><a href="#services">Hizmetlerimiz</a></FooterLink>
              <FooterLink><a href="#contact">İletişim</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>İletişim</FooterTitle>
            <FooterText>
              Mersin, Türkiye
            </FooterText>
            <FooterText>
              <a href="mailto:afemasigorta@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                afemasigorta@gmail.com
              </a>
            </FooterText>
            <FooterText>
              <a href="tel:+905354312698" style={{ color: 'inherit', textDecoration: 'none' }}>
                +90 535 431 26 98
              </a>
            </FooterText>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} AFEMA Sigorta. Tüm hakları saklıdır.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
