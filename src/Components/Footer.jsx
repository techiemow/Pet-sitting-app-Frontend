import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #282c34;
  padding: 20px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  }
`;

const FooterSection = styled.div`
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 5px 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <p>&copy; {new Date().getFullYear()} Pet Care Assistance</p>
      </FooterSection>
      <FooterSection>
        <FooterLinks>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
