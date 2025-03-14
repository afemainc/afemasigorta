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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
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
      title: "Trafik Sigortası",
      description: "Zorunlu trafik sigortası ile üçüncü şahıslara karşı güvence altında olun."
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Kasko Sigortası",
      description: "Aracınızı her türlü riske karşı tam koruma altına alın."
    },
    {
      id: 3,
      icon: "🏠",
      title: "DASK Sigortası",
      description: "Doğal Afet Sigortaları Kurumu ile evinizi depreme karşı güvence altına alın."
    },
    {
      id: 4,
      icon: "⚕️",
      title: "Tamamlayıcı Sağlık Sigortası",
      description: "Özel hastanelerde fark ödemeden kaliteli sağlık hizmeti alın."
    },
    {
      id: 5,
      icon: "✈️",
      title: "Seyahat Sağlık Sigortası",
      description: "Yurt içi ve yurt dışı seyahatlerinizde güvende olun."
    },
    {
      id: 6,
      icon: "🏢",
      title: "İşyeri Sigortası",
      description: "İşletmenizi her türlü riske karşı koruma altına alın."
    },
    {
      id: 7,
      icon: "💰",
      title: "Bireysel Emeklilik",
      description: "Geleceğiniz için bugünden birikim yapın, devlet katkısından faydalanın."
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