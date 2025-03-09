import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: var(--light);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const HighlightText = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  margin-bottom: 1.5rem;
`;

const AboutImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/api/placeholder/600/400');
  background-size: cover;
  background-position: center;
`;

const About = () => {
  return (
    <AboutSection id="about" className="section">
      <div className="container">
        <SectionTitle>Hakkımızda</SectionTitle>
        <AboutGrid>
          <AboutContent>
            <AboutText>
              AFEMA Sigorta olarak, 2008 yılından bu yana müşterilerimize profesyonel ve anlık sigorta çözümleri sunuyoruz. Sektördeki uzun deneyimimiz ve güvenilir hizmet anlayışımızla, sizin için en doğru sigorta çözümlerini bulmak amacındayız.
            </AboutText>
            <HighlightText>
              30'dan fazla sigorta şirketinden sizin için fiyat alıyor, bütçenize en uygun ve en kaliteli sigorta çözümlerini sunuyoruz.
            </HighlightText>
            <AboutText>
              Güveninizi korumak ve hayatınızı güvence altına almak için buradayız. Size en uygun sigorta seçenekleri için bizimle iletişime geçin!
            </AboutText>
          </AboutContent>
          <AboutImageContainer>
            <AboutImage />
          </AboutImageContainer>
        </AboutGrid>
      </div>
    </AboutSection>
  );
};

export default About;