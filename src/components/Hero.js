import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--light);
  position: relative;
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #005bbf;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 45%;
  height: 80%;
  background-image: url('/api/placeholder/600/500');
  background-size: cover;
  background-position: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContent>
          <Title>Güvenilir Sigorta Çözümleri</Title>
          <Subtitle>
            AFEMA Sigorta olarak, 2008 yılından bu yana müşterilerimize profesyonel ve anlık sigorta çözümleri sunuyoruz.
          </Subtitle>
          <CTAButton href="#contact">Bize Ulaşın</CTAButton>
        </HeroContent>
      </div>
      <HeroImage />
    </HeroSection>
  );
};

export default Hero;
