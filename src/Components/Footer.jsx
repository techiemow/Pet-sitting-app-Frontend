import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #282c34;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
  }
`;

const FooterLeft = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 5px 0;

  @media (min-width: 768px) {
    margin: 0 10px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    padding: 10px 15px;
    background-color: #61dafb;
    border: none;
    border-radius: 5px;
    color: #282c34;
    cursor: pointer;

    &:hover {
      background-color: #21a1f1;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <p>&copy; {new Date().getFullYear()} paws and claws</p>
        <FooterLinks>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterLeft>
      <FooterRight>
        <ContactForm>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </ContactForm>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
