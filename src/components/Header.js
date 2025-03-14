import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white);
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
  transition: box-shadow 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const LogoText = styled.span`
  color: ${props => props.color};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--secondary);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavContainer>
          <Logo>
            <LogoText color="#282f68">AFEMA</LogoText>{' '}
            <LogoText color="#e8582e">Sigorta</LogoText>
          </Logo>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</NavLink>
            <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Hizmetlerimiz</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>Hakkımızda</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>İletişim</NavLink>
          </NavLinks>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;