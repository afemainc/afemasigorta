import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--light);
  position: relative;
  padding-top: 80px;
  overflow: hidden;
`;

const AnimatedBackground = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #282f68;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
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
  z-index: 2;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 3 + 2;
        this.color = Math.random() < 0.5 ? '#282f6855' : '#e8582e55';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth * 0.15, 120);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color.replace('55', '40');
            ctx.lineWidth = 1 * (1 - distance / 200);
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#282f6808');
      gradient.addColorStop(1, '#e8582e08');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <HeroSection id="home">
      <AnimatedBackground ref={canvasRef} />
      <ContentWrapper>
        <div className="container">
          <HeroContent>
            <Title>Güvenilir Sigorta Çözümleri</Title>
            <Subtitle>
              AFEMA Sigorta olarak, 2008 yılından bu yana müşterilerimize profesyonel ve anlık sigorta çözümleri sunuyoruz.
            </Subtitle>
            <CTAButton href="#contact">Bize Ulaşın</CTAButton>
          </HeroContent>
        </div>
      </ContentWrapper>
      <HeroImage />
    </HeroSection>
  );
};

export default Hero;
