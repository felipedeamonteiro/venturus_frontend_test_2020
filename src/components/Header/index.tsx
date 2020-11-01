import React from 'react';
import logoImg from '../../assets/logo_v_.png';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="left-div">
      <img src={logoImg} alt="logo-venturus" />
      <h2>Squad Management Tool</h2>
    </div>
    <div className="right-div">
      <h4>Felipe Monteiro</h4>
      <div className="user-initials">FM</div>
    </div>
  </Container>
);

export default Header;
