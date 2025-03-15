import React from 'react';
import styled from 'styled-components';

const PartnersContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.05);
`;

const PartnersTrack = styled.div`
  display: flex;
  animation: scroll 60s linear infinite;
  width: calc(250px * 28);

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 14));
    }
  }
`;

const PartnerItem = styled.div`
  width: 250px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PartnerImage = styled.img`
  max-width: 180px;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const Partners = () => {
  const partnerImages = [
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel25.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel24.jpg',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel23.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel22.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel21.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel20.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel19.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel18.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel17.jpg',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel16.jpg',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel15.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel13.jpg',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel11.png',
    'https://sigortamtr.com/wp-content/uploads/2021/11/carousel10.png'
  ];

  // Duplicate the array to create a seamless loop
  const allPartners = [...partnerImages, ...partnerImages];

  return (
    <PartnersContainer>
      <PartnersTrack>
        {allPartners.map((src, index) => (
          <PartnerItem key={index}>
            <PartnerImage src={src} alt={`Partner ${index + 1}`} />
          </PartnerItem>
        ))}
      </PartnersTrack>
    </PartnersContainer>
  );
};

export default Partners; 