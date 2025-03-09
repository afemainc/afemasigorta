import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: var(--light);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--gray);
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🚗",
      title: "Araç Sigortası",
      description: "Aracınızı en iyi şekilde koruma altına alın. Trafik sigortası ve kasko seçenekleriyle güvende olun."
    },
    {
      id: 2,
      icon: "🏥",
      title: "Sağlık Sigortası",
      description: "Tamamlayıcı sağlık sigortası ile sağlık hizmetlerine daha kolay erişim sağlayın."
    },
    {
      id: 3,
      icon: "🏠",
      title: "Konut Sigortası",
      description: "Evinizi ve değerli eşyalarınızı doğal afetlere ve diğer risklere karşı güvence altına alın."
    },
    {
      id: 4,
      icon: "🏢",
      title: "İşyeri Sigortası",
      description: "İşletmenizi beklenmedik risklere karşı koruyun, işinizi kesintisiz sürdürün."
    }
  ];

  return (
    <ServicesSection id="services" className="section">
      <div className="container">
        <SectionTitle>Hizmetlerimiz</SectionTitle>
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;