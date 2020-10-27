import React from 'react';
import logoImg from '../../assets/cropped-favicon_colorido.png';

import { Container, Header, MiddleContainer, Footer } from './styles';

const MyTeamsDashboard: React.FC = () => (
  <Container>
    <Header>
      <div className="left-div">
        <img src={logoImg} alt="logo-venturus" />
        <h2>Squad Management Tool</h2>
      </div>
      <div className="right-div">
        <h4>Felipe Monteiro</h4>
        <div className="user-initials">FM</div>
      </div>
    </Header>
    <MiddleContainer>
      <div className="right-container">
        <div>
          <h1>My teams</h1>
          <button type="button">+</button>
        </div>
      </div>
      <div className="left-container">
        <div>
          <h1>Top 5</h1>
        </div>
        <div> Jogadores escolhidos </div>
      </div>
    </MiddleContainer>
    <Footer>2020 - All Rights Reserved</Footer>
  </Container>
);

export default MyTeamsDashboard;
