import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Partners from './Partners';
import styles from './Hero.module.css';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 3;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
  text-align: left;
  padding: 0 20px;
  margin-left: 40px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: left;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 2rem;
  text-align: left;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  font-weight: 500;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #cc5500;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(232, 88, 46, 0.3);
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
  z-index: 3;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PartnersWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/hero/car-insurance.webp',
    '/images/hero/health-insurance.webp',
    '/images/hero/earthquake-insurance.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroSection id="home">
      <div className={styles.heroContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className={styles.slideIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <MainContent>
        <ContentWrapper>
          <HeroContent>
            <Title>Güvenilir Sigorta Çözümleri</Title>
            <Subtitle>
              AFEMA Sigorta olarak, 2008 yılından bu yana müşterilerimize profesyonel ve anlık sigorta çözümleri sunuyoruz.
            </Subtitle>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <CTAButton>Bize Ulaşın</CTAButton>
            </Link>
          </HeroContent>
        </ContentWrapper>
        <HeroImage />
      </MainContent>
      <PartnersWrapper>
        <Partners />
      </PartnersWrapper>
    </HeroSection>
  );
};

export default Hero;
